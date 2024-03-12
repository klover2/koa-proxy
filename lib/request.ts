import * as superagent from "superagent";

export enum MethodEnum {
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
  GET = "get",
}

class Request {
  post(url: string, params: unknown) {
    if (params) {
      return superagent.post(url).send(params);
    } else {
      return superagent.post(url);
    }
  }
  put(url: string, params: unknown) {
    if (params) {
      return superagent.put(url).send(params);
    } else {
      return superagent.put(url);
    }
  }
  patch(url: string, params: unknown) {
    if (params) {
      return superagent.patch(url).send(params);
    } else {
      return superagent.patch(url);
    }
  }
  delete(url: string, params: unknown) {
    if (params) {
      return superagent.delete(url).send(params);
    } else {
      return superagent.delete(url);
    }
  }
  get(url: string, params: unknown) {
    if (params) {
      return superagent.get(url).query(params);
    } else {
      return superagent.get(url);
    }
  }
  request(method: MethodEnum, url: string, params?: unknown) {
    return this[method](url, params);
  }
}

export default new Request();
