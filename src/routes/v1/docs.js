"use strict";

const express = require("express");
const swaggerUi = require("swagger-ui-express");

module.exports = async (app) => {
  const swaggerSpec = app.get("api.v1.swagger");

  const router = express.Router();
  router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  return router;
};
