"use strict";

const _ = require("lodash");
const express = require("express");
const accountsService = require("../../services/accounts");
const {wrapAsyncRoute} = require("../../utils/route");

module.exports = async (app, _config_) => {
  const DbModels = app.get("db");

  const router = express.Router();

  router
    .get("/", wrapAsyncRoute(async (_req_, res) => {
      const {accounts} = await accountsService.all({
        ...DbModels,
      });
      res.json({
        status: "Ok",
        messages: [],
        accounts,
      });
    }));

  return router;
};
