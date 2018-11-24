"use strict";

const _ = require("lodash");

module.exports = {example};

function example(items, testFunction) {
  items.forEach((item) => {
    const description = _.get(item, "describe", `for ${JSON.stringify(item)}`);
    it(description, async () => {
      return Promise.resolve(testFunction(item));
    });
  });
}
