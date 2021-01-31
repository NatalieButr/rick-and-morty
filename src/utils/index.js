import superagent from "superagent";

import { API_ROOT } from "utils/constants";
import WebError from "utils/error/WebError";

const json = "application/json";

const DefaultHeaders = {
  Accept: json,
  "Content-Type": json,
};

function onSuccess(response) {
  return response.body?.body || {};
}

function onFailure(error) {
  let { status } = error;

  let response = JSON.parse(error.message) || {};

  throw new WebError({ status, code: status, message: response.error });
}

export function handleRequest(httpRequest) {
  return httpRequest.then(onSuccess).catch(onFailure);
}

class HttpClient {
  constructor(name) {
    this.name = name;
  }

  getUrl(url = "") {
    return `${API_ROOT}/${this.name}${url}`;
  }

  GET({ url, params }) {
    return superagent.get(this.getUrl(url)).set(DefaultHeaders).query(params);
  }
}

const requestHandler = {
  get: (service, prop) => {
    let origin = service[prop];

    if (typeof origin === "function") {
      return function getDecoratedMethod(...args) {
        return handleRequest(origin.apply(this, args));
      };
    }
    return origin;
  },
};

function withRequestHandler(service) {
  return new Proxy(service, requestHandler);
}

export { HttpClient, withRequestHandler };
