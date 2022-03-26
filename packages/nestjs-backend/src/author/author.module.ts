import { NestjsQueryGraphQLModule } from "@nestjs-query/query-graphql";
import { NestjsQueryTypeOrmModule } from "@nestjs-query/query-typeorm";
import { Module } from "@nestjs/common";
import { VkService } from "src/queue/vk/vk.service";
import { AuthorDto } from "./author.dto";
import { AuthorEntity } from "./author.entity";
import { AuthorService } from "./author.service";

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([AuthorEntity])],
            resolvers: [{ DTOClass: AuthorDto, ServiceClass: AuthorService }],
            services: [AuthorService, VkService],
        }),
    ],
})
export class AuthorModule {}
