module.exports = {
  "extends": [
    "airbnb-base",
  ],
  "parserOptions": {
    "sourceType": "script",
  },
  "rules": {
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "consistent-return": 0,
    "function-paren-newline": 0,
    "indent": 0,
    "no-console": 2,
    "no-throw-literal": 0,
    "no-underscore-dangle": [2, { "allow": ["_id"] }],
    "no-use-before-define": 0,
    "no-unused-vars": [2, {
      "argsIgnorePattern": "^_.+_$",
      "varsIgnorePattern": "^_$",
    }],
    "object-curly-newline": 0,
    "object-curly-spacing": 0,
    "prefer-destructuring": 0,
    "prefer-promise-reject-errors": 0,
    "quotes": [2, "double"],
    "strict": [2, "global"],
  },
};
