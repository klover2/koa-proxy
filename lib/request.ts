import * as superagent from "superagent";

export enum MethodEnum {
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
  GET = "get",
}

class Request {
  post(url: string, params: Record<string, any>) {
    return superagent.post(url).send(params);
  }
  put(url: string, params: Record<string, any>) {
    return superagent.put(url).send(params);
  }
  patch(url: string, params: Record<string, any>) {
    return superagent.patch(url).send(params);
  }
  delete(url: string, params: Record<string, any>) {
    return superagent.delete(url).send(params);
  }
  get(url: string, params: Record<string, any>) {
    return superagent.get(url).query(params);
  }
  request(method: MethodEnum, url: string, params: Record<string, any>) {
    return this[method](url, params);
  }
}

export default new Request();
