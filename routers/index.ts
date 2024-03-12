"use strict";
import glob from "glob";
import { resolve } from "path";
import Router from "koa-router";

export default (Router: Router) => {
  // 路由主动加载
  glob
    .sync(resolve(__dirname, "./", "**/*.router.{ts,js}"))
    .filter((value) => value.indexOf("index") === -1)
    .map((router) => {
      require(router)(Router);
    });
};
