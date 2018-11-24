"use strict";

const _ = require("lodash");
const mongoose = require("mongoose");
const logger = require("./logger");

module.exports = async (app, {db: dbConfig}) => {
  const dbUri = `${dbConfig.url}/${dbConfig.name}`;
  const mongooseOptions = _.get(dbConfig, "config", {});

  mongoose.promise = global.Promise;
  mongoose.set("useCreateIndex", true);

  const connection = await mongoose.createConnection(dbUri, {
    useNewUrlParser: true,
    ...mongooseOptions,
  });

  /* eslint-disable global-require */
  const {AccountSchema} = require("./schemas/account");
  const AccountModel = connection.model("Account", AccountSchema);
  await AccountModel.init();

  app.set("db", {
    AccountModel,
  });

  logger.info(`Connected to mongo '${dbUri}'`);
};
