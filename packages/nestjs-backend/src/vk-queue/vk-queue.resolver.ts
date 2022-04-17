import { Args, Query, Resolver } from "@nestjs/graphql";
import { InjectRepository } from "@nestjs/typeorm";
import { HistoryEntity } from "src/history/history.entity";
import { VkService } from "src/queue/vk/vk.service";
import { Repository } from "typeorm";
import { VkQueue } from "./vk-queue.model";

@Resolver(() => VkQueue)
export class VkQueueResolver {
    constructor(private vk: VkService, @InjectRepository(HistoryEntity) private history: Repository<HistoryEntity>) {}

    @Query(() => VkQueue)
    async vkQueue(@Args("url", { type: () => String, nullable: true }) url: string): Promise<VkQueue | null> {
        const [history] = await this.history.find({ where: { url }, relations: ["author"] });
        const vkQueue = new VkQueue();

        if (typeof history !== "undefined") {
            const {
                author: { accessToken },
            } = history;

            this.vk.setAccessToken(accessToken);

            const post = await this.vk.getPostByID(history);

            if (post?.post_type === "postpone") {
                vkQueue.date = post.date;
                vkQueue.link = url;
            }
        }

        return vkQueue;
    }
}
