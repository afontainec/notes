function isJson(x) {
    // check if its null
  if (!x) {
    return false;
  }
  return (typeof x) === 'object';
}

exports.isJSON = isJson;

exports.isEmptyJSON = function (x) {
  // if it is not a json then it is not an empty json
  if (!isJson(x)) {
    return false;
  }
  return Object.keys(x).length === 0;
};

exports.isInteger = function isInt(value) {
  return !isNaN(value) && (function (x) { return (x | 0) === x; }(parseFloat(value)));
};
