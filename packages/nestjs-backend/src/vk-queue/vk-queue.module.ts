import { NestjsQueryGraphQLModule } from "@nestjs-query/query-graphql";
import { NestjsQueryTypeOrmModule } from "@nestjs-query/query-typeorm";
import { Module } from "@nestjs/common";
import { HistoryEntity } from "src/history/history.entity";
import { VkService } from "src/queue/vk/vk.service";
import { VkQueueResolver } from "./vk-queue.resolver";

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([HistoryEntity])],
        }),
    ],
    providers: [VkQueueResolver, VkService],
})
export class VkQueueModule {}
