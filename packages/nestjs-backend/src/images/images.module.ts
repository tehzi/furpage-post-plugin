import { NestjsQueryGraphQLModule } from "@nestjs-query/query-graphql";
import { NestjsQueryTypeOrmModule } from "@nestjs-query/query-typeorm";
import { Module } from "@nestjs/common";
import { ImagesDto } from "./images.dto";
import { ImagesEntity } from "./images.entity";

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([ImagesEntity])],
            resolvers: [{ DTOClass: ImagesDto, EntityClass: ImagesEntity }],
        }),
    ],
})
export class ImagesModule {}
