import { NestjsQueryGraphQLModule } from "@nestjs-query/query-graphql";
import { NestjsQueryTypeOrmModule } from "@nestjs-query/query-typeorm";
import { Module } from "@nestjs/common";
import { QueueDto } from "./queue.dto";
import { QueueEntity } from "./queue.entity";

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([QueueEntity])],
            resolvers: [{ DTOClass: QueueDto, EntityClass: QueueEntity }],
        }),
    ],
})
export class QueueModule {}
