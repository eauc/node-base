"use strict";

const _ = require("lodash");
const express = require("express");

module.exports = async (app, config) => {
  const {codeVersion, baseUrl} = config;

  const router = express.Router();
  app.use(baseUrl, router);

  router.get("/", (req, res) => {
    res.json({
      description: "API Description",
      codeVersion,
      v1: "./v1",
    });
  });

  /* eslint-disable global-require */
  router.use("/v1", await require("./v1")(app, config));
};
