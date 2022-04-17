import { NestjsQueryGraphQLModule } from "@nestjs-query/query-graphql";
import { NestjsQueryTypeOrmModule } from "@nestjs-query/query-typeorm";
import { Module } from "@nestjs/common";
import { HistoryDto } from "./history.dto";
import { HistoryEntity } from "./history.entity";

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([HistoryEntity])],
            resolvers: [{ DTOClass: HistoryDto, EntityClass: HistoryEntity }],
        }),
    ],
})
export class HistoryModule {}
