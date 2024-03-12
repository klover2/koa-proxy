"use strict";
import Koa from "koa"; // koa框架

import Router from "koa-router"; // koa-router：处理路由
import cors from "koa2-cors";
import bodyParser from "koa-bodyparser";
import routers from "./routers";

const app = new Koa(); // 新建一个koa应用
const router = new Router(); // 新建一个路由

// 解决跨域问题
app.use(
  cors({
    credentials: true,
    exposeHeaders: ["*"],
  })
);
// app.use(bodyParser());

// 加载路由
routers(router);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001, (): void => {
  console.log(`Server running on port ${3001}`);
});
