"use strict";

const _ = require("lodash");

class AppError extends Error {
  constructor({status, messages}) {
    super(_.join(messages, "; "));
    this.status = status;
    this.messages = messages;
  }
}

module.exports = {
  AppError,
};
