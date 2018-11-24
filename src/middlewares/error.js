"use strict";

const _ = require("lodash");

const logger = require("../logger");

const STATUS_CODES = {
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
};

module.exports = (app) => {
  app.use((err, req, res, _next_) => {
    logger.error({
      ..._.pick(err, "messages", "message", "stack", "status"),
      reqId: req.id,
    });
    const status = err.status || "InternalServerError";
    res.status(_.get(STATUS_CODES, status, 500));
    return res.json({
      status,
      messages: _.isArray(err.messages) ? err.messages : [err.message],
    });
  });
};
