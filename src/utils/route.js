"use strict";

module.exports = {
  wrapAsyncRoute,
};

function wrapAsyncRoute(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
