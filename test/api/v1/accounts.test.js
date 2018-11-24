"use strict";

const _ = require("lodash");
const hippieSwagger = require("hippie-swagger");
const {initApp} = require("../../setup/app");

describe("API V1 Accounts", () => {
  let app;
  let apiSwagger;
  let AccountModel;
  let accountExample;

  beforeAll(async () => {
    app = await initApp();
    apiSwagger = app.get("api.v1.swagger");
    AccountModel = app.get("db").AccountModel;
  });

  beforeEach(async () => {
    accountExample = await AccountModel.create({
      description: "test account",
    });
  });

  afterEach(async () => {
    await AccountModel.remove({});
  });

  describe("get all accounts", () => {
    it("returns an accounts dictionnary", async () => {
      await hippieSwagger(app, apiSwagger)
        .json()
        .get("/v1/accounts")
        .expect((_req_, body, done) => {
          expect(_.pick(body, "status", "messages")).toEqual({
            status: "Ok",
            messages: [],
          });
          const {accounts} = body;
          expect(_.keys(accounts).length).toEqual(1);
          const account = accounts[accountExample.id];
          expect(_.pick(account, "description", "id")).toEqual({
            description: "test account",
            id: accountExample.id,
          });
          done();
        })
        .expectStatus(200)
        .end();
    });
  });
});
