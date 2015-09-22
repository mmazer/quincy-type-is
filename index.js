var toString = Object.prototype.toString;

function type(obj) {
  return toString.call(obj);
}

type.ARGS = '[object Arguments]';
type.ARRAY = '[object Array]';
type.DATE = '[object Date]';
type.FUNCTION = '[object Function]';
type.OBJECT = '[object Object]';
type.NUMBER = '[object Number]';
type.REGEX = '[object RegExp]';
type.STRING = '[object String]';
type.UNDEF = '[object Undefined]';
type.NULL = '[object Null]';

var api = {
  type: type,
  isSome: function(x) {
    return x != null;
  },
  isNone: function(x) {
    return x == null;
  },
  isUndef: function(x) {
    return x === void 0;
  },
  isNull: function(x) {
    return x === null;
  },
  isArray: function(v) {
    return type(v) === type.ARRAY;
  },
  isFunction: function(v) {
    return type(v) === type.FUNCTION;
  },
  isObject: function(v) {
    return api.isSome(v) && type(v) === type.OBJECT;
  },
  isRegExp: function(v) {
    return type(v) === type.REGEX;
  },
  isString: function(v) {
    return type(v) === type.STRING;
  },
  isNumber: function(v) {
    return type(v) === type.NUMBER;
  },
  // Tests if value is NaN and deals with global isNaN coercing its argument
  // to a number
  isNaN: function(n) {
    return api.isNumber(n) && isNaN(n);
  },
  isDate: function(x) {
    return type(x) === type.DATE;
  },
  isIterable: function(obj) {
    if (api.isNone(obj)) return false;

    return api.isArray(obj) || obj.length === +obj.length;
  }
};

module.exports = api;

