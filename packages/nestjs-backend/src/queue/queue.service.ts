import { DeepPartial, QueryService, UpdateOneOptions } from "@nestjs-query/core";
import { TypeOrmQueryService } from "@nestjs-query/query-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthorEntity } from "src/author/author.entity";
import { HistoryEntity } from "src/history/history.entity";
import { ImagesEntity } from "src/images/images.entity";
import { Repository } from "typeorm";
import { QueueEntity } from "./queue.entity";
import { VkService } from "./vk/vk.service";

@QueryService(QueueEntity)
export class QueueService extends TypeOrmQueryService<QueueEntity> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(@InjectRepository(QueueEntity) repo: Repository<QueueEntity>, private vk: VkService) {
        super(repo);
    }

    async updateOne(
        id: string | number,
        update: DeepPartial<QueueEntity>,
        options?: UpdateOneOptions<QueueEntity>,
    ): Promise<QueueEntity> {
        const updatedEntity = await super.updateOne(id, update, options);

        if (updatedEntity.published) {
            const { authorId } = updatedEntity;
            // eslint-disable-next-line unicorn/no-array-method-this-argument
            const images = await this.repo.manager.find(ImagesEntity, { where: { queueId: id } });
            // eslint-disable-next-line unicorn/no-array-method-this-argument
            const [author] = await this.repo.manager.find(AuthorEntity, { where: { id: authorId } });

            this.vk.setAccessToken(author.accessToken);
            const vkPostId = await this.vk.postVk(images);

            for (const image of images) {
                const { url, tags } = image;
                const historyItem = this.repo.manager.create(HistoryEntity, {
                    authorId,
                    url,
                    tags,
                    vkPostId,
                });
                await this.repo.manager.insert(HistoryEntity, historyItem);
            }

            await this.repo.manager.delete(QueueEntity, updatedEntity.id);
        }

        return updatedEntity;
    }
}
