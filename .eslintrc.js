module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};