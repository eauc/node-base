"use strict";

const _ = require("lodash");
const express = require("express");
const logger = require("./logger");

module.exports = async (config) => {
  logger.info(config, "App starting with config");

  const app = express();

  /* eslint-disable global-require */
  await require("./db")(app, config);
  await require("./middlewares")(app, config);
  await require("./routes")(app, config);
  // error handler MUST be registered last
  await require("./middlewares/error")(app, config);

  return app;
};
