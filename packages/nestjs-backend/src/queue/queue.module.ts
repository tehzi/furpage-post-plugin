import { NestjsQueryGraphQLModule } from "@nestjs-query/query-graphql";
import { NestjsQueryTypeOrmModule } from "@nestjs-query/query-typeorm";
import { Module } from "@nestjs/common";
import { QueueDto } from "./queue.dto";
import { QueueEntity } from "./queue.entity";
import { QueueService } from "./queue.service";
import { VkService } from "./vk/vk.service";

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([QueueEntity])],
            resolvers: [{ DTOClass: QueueDto, ServiceClass: QueueService }],
            services: [QueueService, VkService],
        }),
    ],
    providers: [VkService],
})
export class QueueModule {}
