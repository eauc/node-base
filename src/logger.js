"use strict";

const logger = require("pino")({
  enabled: process.env.NODE_ENV !== "test",
});

module.exports = logger;
