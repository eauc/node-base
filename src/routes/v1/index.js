"use strict";

const express = require("express");

module.exports = async (app, config) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json({
      docs: "./docs",
      accounts: "./accounts",
    });
  });

  /* eslint-disable global-require */
  require("../../middlewares/logger")(router, {api: "v1"}, config);

  router.use("/docs", await require("./docs")(app, config));
  router.use("/accounts", await require("./accounts")(app, config));

  return router;
};
