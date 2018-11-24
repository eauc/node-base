"use strict";

const _ = require("lodash");
const express = require("express");
const helmet = require("helmet");

module.exports = async (app, config) => {
  app.use(helmet());

  app.use(express.json());

  app.use(express.urlencoded({
    extended: true,
  }));

  /* eslint-disable global-require */
  await require("./swagger")(app, config);
};
