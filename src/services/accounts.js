"use strict";

const _ = require("lodash");

module.exports = {
  all,
};

async function all({AccountModel}) {
  const accountsList = await AccountModel.find();
  const accounts = _.chain(accountsList)
        .map((account) => [
          account.id,
          _.omit(account.toObject(), "deleted"),
        ])
        .fromPairs()
        .value();
  return {accounts};
}
