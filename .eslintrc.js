module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "arrow-parens": 0,
    "object-curly-newline": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};