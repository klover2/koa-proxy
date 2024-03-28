"use strict";
import { Context, Next } from "koa";
import Router from "koa-router";
import Request, { MethodEnum } from "../lib/request";

module.exports = (router: Router): void => {
  router.all(new RegExp("/test/*"), async (ctx: Context, next: Next) => {
    const url = ctx.url;
    const req = Request.request(
      ctx.method.toLowerCase() as MethodEnum,
      "127.0.0.1:3000" + url.replace("/test", ""),
      ctx.request.body
    );

    try {
      const res = await req;
      ctx.status = res.status;
      const headers = res.headers;
      Object.keys(headers).map((key) => ctx.set(key, headers[key]));
      ctx.body = res.text;
    } catch (error: any) {
      ctx.status = error.status;
      ctx.message = error.message;
      const headers = error?.response?.headers || {};
      Object.keys(headers).map((key) => ctx.set(key, headers[key]));
      ctx.body = error.response.text;
    }
  });
  router.post("/api", async (ctx: Context, next: Next) => {
    console.log(ctx.request);
    console.log(ctx.request.body);
    ctx.body = true;
  });
};
