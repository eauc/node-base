"use strict";

const _ = require("lodash");

const {
  all,
} = require("../../../src/services/accounts");

describe("Accounts service", () => {
  describe("all", () => {
    it("returns a dictionnary of all accounts", async () => {
      const AccountModel = {
        find: () => [
          {
            id: "#id1",
            description: "First Account",
            toObject() { return _.omit(this, "toObject"); },
          },
          {
            id: "#id2",
            description: "Second Account",
            toObject() { return _.omit(this, "toObject"); },
          },
        ],
      };

      const {accounts} = await all({
        AccountModel,
      });

      expect(accounts).toEqual({
        "#id1": {
          id: "#id1",
          description: "First Account",
        },
        "#id2": {
          id: "#id2",
          description: "Second Account",
        },
      });
    });
  });
});
