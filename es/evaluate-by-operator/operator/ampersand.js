"use strict";

exports.__esModule = true;
exports["default"] = func;
exports.SYMBOL = void 0;
var SYMBOL = '&';
exports.SYMBOL = SYMBOL;

function func() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (acc, value) {
    return acc + value.toString();
  }, '');
}

func.SYMBOL = SYMBOL;