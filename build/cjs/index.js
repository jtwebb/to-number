"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toNegativeFloat = exports.toNegativeInt = exports.toPositiveFloat = exports.toPositiveInt = exports.toFloat = exports.toInt = exports.toNumber = void 0;
var defaultOptions = {
  separator: ',',
  decimalPlaces: null,
  includeZero: false
};

var toNumber = function toNumber(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions,
      separator = _ref.separator;

  var allowedTypes = {
    string: '[object String]',
    number: '[object Number]'
  };
  var type = Object.prototype.toString.call(value);

  if (!Object.values(allowedTypes).includes(type)) {
    return false;
  }

  if (+value === Infinity || +value === -Infinity) {
    return +value;
  }

  if (type === allowedTypes.number) {
    return value - value === 0 && !isNaN(value) && value;
  } // We're now dealing with a string


  value = value.trim();

  if (value === '') {
    return false;
  }

  value = value.replace(new RegExp(separator, 'g'), '');
  value = +value;
  return value - value === 0 && !isNaN(value) && value;
};

exports.toNumber = toNumber;

var testInfinite = function testInfinite(value) {
  return Number.isFinite ? !Number.isFinite(value) : !isFinite(value);
};

var toInt = function toInt(value) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions,
      separator = _ref2.separator;

  var number = toNumber(value, {
    separator: separator
  });

  if (testInfinite(number)) {
    return number;
  }

  return number && parseInt(number, 10);
};

exports.toInt = toInt;

var toFloat = function toFloat(value) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions,
      decimalPlaces = _ref3.decimalPlaces,
      separator = _ref3.separator;

  var number = toNumber(value, {
    separator: separator
  });

  if (testInfinite(number)) {
    return number;
  }

  if (!decimalPlaces && decimalPlaces !== 0) {
    return number;
  }

  return number && parseFloat(number.toFixed(decimalPlaces));
};

exports.toFloat = toFloat;

var toPositiveInt = function toPositiveInt(value) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions,
      includeZero = _ref4.includeZero,
      separator = _ref4.separator;

  var number = toInt(value, {
    separator: separator
  });
  var lowestNumber = includeZero ? 0 : 1;
  return number >= lowestNumber && number;
};

exports.toPositiveInt = toPositiveInt;

var toPositiveFloat = function toPositiveFloat(value) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions,
      includeZero = _ref5.includeZero,
      decimalPlaces = _ref5.decimalPlaces,
      separator = _ref5.separator;

  var number = toFloat(value, {
    decimalPlaces: decimalPlaces,
    separator: separator
  });
  var isPositive = includeZero ? number >= 0 : number > 0;
  return isPositive && number;
};

exports.toPositiveFloat = toPositiveFloat;

var toNegativeInt = function toNegativeInt(value) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions,
      includeZero = _ref6.includeZero,
      separator = _ref6.separator;

  var number = toInt(value, {
    separator: separator
  });
  var highestNumber = includeZero ? 0 : -1;
  return number <= highestNumber && number;
};

exports.toNegativeInt = toNegativeInt;

var toNegativeFloat = function toNegativeFloat(value) {
  var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions,
      _ref7$includeZero = _ref7.includeZero,
      includeZero = _ref7$includeZero === void 0 ? false : _ref7$includeZero,
      decimalPlaces = _ref7.decimalPlaces,
      separator = _ref7.separator;

  var number = toFloat(value, {
    decimalPlaces: decimalPlaces,
    separator: separator
  });
  var isNegative = includeZero ? number <= 0 : number < 0;
  return isNegative && number;
};

exports.toNegativeFloat = toNegativeFloat;
//# sourceMappingURL=index.js.map