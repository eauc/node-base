"use strict";

const hippie = require("hippie");
const {initApp} = require("../setup/app");

describe("API Root", () => {
  let app;

  beforeAll(async () => {
    app = await initApp({
      codeVersion: "test-version",
    });
  });

  it("describes service version", async () => {
    await hippie(app)
      .json()
      .get("/")
      .expectBody({
        description: "API Description",
        codeVersion: "test-version",
        v1: "./v1",
      })
      .expectStatus(200)
      .end();
  });
});
