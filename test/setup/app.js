"use strict";

const _ = require("lodash");
const baseConfig = require("../../src/config");

// jest.setTimeout(12000);

module.exports = {initApp};

async function initApp(config) {
  return require("../../src/app")(_.merge({}, baseConfig, {
    baseUrl: "",
    codeVersion: "test",
    db: {
      url: "mongodb://test-db:27017",
      name: "test-db",
    },
    env: "test",
  }, config));
}
