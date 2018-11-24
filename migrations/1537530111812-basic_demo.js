"use strict";

const {AccountSchema} = require("../src/schemas/account.js");

function setupModels() {
  this("Account", AccountSchema);
}

/**
 * Make any changes you need to make to the database here
 */
exports.up = function up(done) {
  setupModels.call(this);

  this("Account").create({
    description: "#demo account",
  }).then(() => done(), done);
};

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  setupModels.call(this);

  this("Account").findOne({
    description: "#demo account",
  }).then((account) => {
    return this("Account").remove({
      _id: account._id,
    });
  }).then(() => done(), done);
};
