import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ImagesModule } from "src/images/images.module";
import { QueueModule } from "src/queue/queue.module";
import { AuthorModule } from "src/author/author.module";
import { HistoryModule } from "src/history/history.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_DB,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            autoLoadEntities: true,
            synchronize: true,
            logging: process.env.DATABASE_LOGGING === "true",
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
        ImagesModule,
        QueueModule,
        AuthorModule,
        HistoryModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
