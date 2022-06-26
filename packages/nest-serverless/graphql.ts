import "reflect-metadata";
import { Handler, Context } from "aws-lambda";
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import express from "express";
import { createServer, proxy } from "aws-serverless-express";
import { Server } from "node:http";
import { AppModule } from "./src/app.module";
import { eventContext } from "aws-serverless-express/middleware";

let server: Server;

async function bootstrap(): Promise<Server> {
    if (!server) {
        const app = express();
        const nest = await NestFactory.create(AppModule, new ExpressAdapter(app));

        nest.use(eventContext());
        await nest.init();

        server = createServer(app, undefined, []);
    }

    return server;
}

export const handler: Handler = async (event: unknown, context: Context) => {
    server = await bootstrap();

    return proxy(server, event, context, "PROMISE").promise;

    // return {
    //     statusCode: 200,
    //     body: "hello world!",
    // };
};
