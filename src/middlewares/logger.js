"use strict";

const _ = require("lodash");
const expressPino = require("express-pino-logger");
const uuid = require("uuid/v4");

const logger = require("../logger");

module.exports = (router, props, config) => {
  const reqIdHeader = _.get(config, "headers.requestId");

  router.use((req, res, next) => {
    req.id = req.headers[reqIdHeader] || uuid();
    res.set(reqIdHeader, req.id);

    // *** monkey patch res.json() to log response body :-|
    // const baseJson = res.json;
    // res.json = (obj) => {
    //   res.locals.json = obj;
    //   return baseJson.call(res, obj);
    // };

    next();
  });

  router.use(expressPino({
    logger: logger.child(props),
    genReqId: (req) => req.id,
    serializers: {
      req: (req) => {
        req.baseUrl = req.raw.baseUrl;
        req.body = req.raw.body;
        return req;
      },
      res: (res) => {
        // *** Uncomment to log response body
        // let body = _.get(res, "raw.locals.json");
        // res.body = body;
        return res;
      },
    },
  }));
};
