import { DeepPartial, QueryService } from "@nestjs-query/core";
import { TypeOrmQueryService } from "@nestjs-query/query-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { VkService } from "src/queue/vk/vk.service";
import { Repository } from "typeorm";
import { AuthorEntity } from "./author.entity";

@QueryService(AuthorEntity)
export class AuthorService extends TypeOrmQueryService<AuthorEntity> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(@InjectRepository(AuthorEntity) repo: Repository<AuthorEntity>, private vk: VkService) {
        super(repo);
    }

    async createOne(record: DeepPartial<AuthorEntity>): Promise<AuthorEntity> {
        const { accessToken } = record;
        this.vk.setAccessToken(accessToken);

        const { id, first_name: firstName, last_name: lastName } = await this.vk.getProfile();

        record.vkID = id;
        record.name = `${firstName} ${lastName}`;

        const createdEntity = await super.createOne(record);

        return createdEntity;
    }
}
