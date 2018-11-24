"use strict";

const Ajv = require("ajv");

const ajv = new Ajv({
  allErrors: true,
  logger: false,
});

module.exports = {
  ajv,
};
