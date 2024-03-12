"use strict";
import * as http from "http";
import * as https from "https";
import { Context, Next } from "koa";
import Router from "koa-router";
import Request, { MethodEnum } from "../lib/request";
import * as superagent from "superagent";

module.exports = (router: Router): void => {
  router.all("/user", async (ctx: Context, next: Next) => {
    const req = superagent.post("http://127.0.0.1:3000/api/nium/notifications");

    // 将响应流作为ctx.body返回给客户端

    ctx.body = req;
  });
};
