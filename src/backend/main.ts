// TODO: Verify that reflect-metadata is necessary here

import "reflect-metadata";
import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NextApiHandler } from "next";
import { Server } from "http";
import { AppModule } from "./app.module";

let app: INestApplication;

export const getApp = async () => {
  if (!app) {
    app = await NestFactory.create(AppModule, { bodyParser: false });
    app.setGlobalPrefix("api");
    await app.init();
  }
  return app;
};

export const getListener = async () => {
  const app = await getApp();
  const server: Server = app.getHttpServer();
  const [listener] = server.listeners("request") as NextApiHandler[];
  return listener;
};
