"use strict";

const _ = require("lodash");
const Schema = require("mongoose").Schema;
const mongooseDelete = require("mongoose-delete");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const AccountSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    unique: true,
  },
}, {
  timestamps: true,
});

AccountSchema.set("toObject", {
  versionKey: false,
  transform(doc, ret) {
    return {
      ..._.omit(ret, "_id", "__v"),
      id: ret._id,
    };
  },
});

AccountSchema.plugin(mongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});
AccountSchema.plugin(mongooseUniqueValidator);

module.exports = {
  AccountSchema,
};
