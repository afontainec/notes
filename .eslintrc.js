// .eslintrc.js

module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "angular",
    "import"
  ],
  "rules": {
    "consistent-return": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "max-statements": [2, 10],
    "max-depth": [1, 2],
    "complexity": [2, 5],
    "max-len": [2, 80],
    "max-params": [2, 4],
    "max-nested-callbacks": [2, 3]
  },
  "globals": {}
};
