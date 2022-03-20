import { NestjsQueryGraphQLModule } from "@nestjs-query/query-graphql";
import { NestjsQueryTypeOrmModule } from "@nestjs-query/query-typeorm";
import { Module } from "@nestjs/common";
import { AuthorDto } from "./author.dto";
import { AuthorEntity } from "./author.entity";

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([AuthorEntity])],
            resolvers: [{ DTOClass: AuthorDto, EntityClass: AuthorEntity }],
        }),
    ],
})
export class AuthorModule {}
