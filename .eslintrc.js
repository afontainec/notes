// .eslintrc.js

module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "angular",
    "import",
    "smells"
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
    "max-nested-callbacks": [2, 3],
    "smells/no-switch": 1,
    "smells/no-complex-switch-case": 2,
    "smells/no-setinterval": 1,
    "smells/no-this-assign": 1,
    "jsx-a11y/href-no-hash": 0,
    "consistent-this": 2,
    "no-extra-bind": 2
  },
  "globals": {}
};
