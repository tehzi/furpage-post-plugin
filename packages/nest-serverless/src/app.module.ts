import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigModule } from "@nestjs/config";
import { YdbModule } from "./ydb/ydb.module";
import { ImagesModule } from "./images/images.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            // TODO исправить для прода и теста
            path: "/proxy/graphql",
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
        YdbModule.forRoot({
            endpoint: process.env.YDB_ENDPOINT,
            database: process.env.DATABASE,
            logger: true,
        }),
        ImagesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
