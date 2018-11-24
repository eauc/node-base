"use strict";

const _ = require("lodash");
const convict = require("convict");

const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  port: {
    doc: "The HTTP server port.",
    format: "port",
    default: 3000,
    env: "PORT",
  },
  baseUrl: {
    doc: "The API base URL.",
    format: "*",
    default: "/",
    env: "BASE_URL",
  },
  codeVersion: {
    doc: "The source code version.",
    format: "*",
    default: "dev",
    env: "CODE_VERSION",
  },
  headers: {
    requestId: {
      doc: "Header used to forward request ids.",
      format: "*",
      default: "x-api-req-id",
      env: "HEADERS_REQ_ID",
    },
  },
  db: {
    url: {
      doc: "The DB url.",
      format: "*",
      default: "mongodb://db:27017",
      env: "DB_URL",
    },
    name: {
      doc: "The DB name.",
      format: "*",
      default: `api-${process.env.NODE_ENV}`,
      env: "DB_NAME",
    },
  },
});

config.validate({allowed: "strict"});

module.exports = config.getProperties();
