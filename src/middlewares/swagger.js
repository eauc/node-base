"use strict";

const _ = require("lodash");
const SwaggerParser = require("swagger-parser");
const swaggerStats = require("swagger-stats");

module.exports = async (app, {baseUrl, codeVersion}) => {
  /* eslint-disable global-require */
  const parser = new SwaggerParser();
  const rawSwagger = require("../routes/v1/swagger.json");
  const swaggerSpec = await parser.dereference(rawSwagger);
  swaggerSpec.basePath = baseUrl;

  app.set("api.v1.swagger", swaggerSpec);

  app.use(swaggerStats.getMiddleware({
    name: "api",
    uriPath: `${baseUrl}/monitoring`,
    version: codeVersion,
    swaggerSpec,
  }));
};
