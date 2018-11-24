"use strict";

const _ = require("lodash");
const logger = require("./logger");
const config = require("./config");
const initApp = require("./app");

(async () => {
  const app = await initApp(config);

  app.listen(config.port, () => {
    logger.info(`HTTP Server started on port ${config.port}`);
  });
})().catch((error) => {
  logger.error(error, `Failed to start app: ${error.message}`);
  process.exit(1);
});
