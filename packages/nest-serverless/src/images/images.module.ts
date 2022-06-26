import { NestjsQueryGraphQLModule } from "@nestjs-query/query-graphql";
import { Module } from "@nestjs/common";
import { YdbModule } from "../ydb/ydb.module";
import { ImagesDto } from "./images.dto";
import { ImagesEntity } from "./images.entity";

@Module({
    imports: [
        YdbModule.forFeature([ImagesEntity]),
        // NestjsQueryGraphQLModule.forFeature({
        //     imports: [YdbModule.forFeature([ImagesEntity])],
        //     resolvers: [{ DTOClass: ImagesDto, EntityClass: ImagesEntity }],
        // }),
    ],
})
export class ImagesModule {}
