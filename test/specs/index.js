var expect = require('chai').expect;

describe('type-is', function() {

  var _ = require('../../index.js');

  describe('type', function() {
    var type = _.type;
    it('should identify the type of its argument', function() {
      expect(type({})).to.equal(type.OBJECT);
      expect(type('')).to.equal(type.STRING);
      expect(type([])).to.equal(type.ARRAY);
      expect(type(function(){})).to.equal(type.FUNCTION);
      expect(type(10)).to.equal(type.NUMBER);
      expect(type(new Date())).to.equal(type.DATE);
      expect(type(/^foo$/)).to.equal(type.REGEX);
    });

    it('should identify `null` and `undefined`' ,function() {
      var x;
      expect(_.type(x)).to.equal(_.type.UNDEF);
      x = null;
      expect(_.type(x)).to.equal(_.type.NULL);
    });
  });

  describe('isSome', function() {
    var isSome = _.isSome;
    it('should return true for values that are not undefined or null', function() {
      var x;
      expect(isSome(x)).to.be.false;
      x = null;
      expect(isSome(x)).to.be.false;
      x = {};
      expect(isSome(x)).to.be.true;
    });
  });

  describe('isNone', function() {
    var isNone =_ .isNone;
    it('should return true for values that are undefine or null', function() {
      var x;
      expect(isNone(x)).to.be.true;
      x = null;
      expect(isNone(x)).to.be.true;
      x = {};
      expect(isNone(x)).to.be.false;
    });
  });

  describe('isUndef', function() {
    var isUndef = _.isUndef;
    it('should return true for undefined values', function() {
      var x;
      expect(isUndef(x)).to.be.true;
      x = null;
      expect(isUndef(x)).to.be.false;
      x = {};
      expect(isUndef(x)).to.be.false;
    });
  });

  describe('isNull', function() {
    var isNull = _.isNull;
    it('should return true for null values', function() {
      var x;
      expect(isNull(x)).to.be.false;
      x = {};
      expect(isNull(x)).to.be.false;
      x = null;
      expect(isNull(x)).to.be.true;
    });
  });

  describe('isArray', function() {
    var isArray = _.isArray;
    it('should return true for arrays', function() {
      expect(isArray([])).to.be.true;
      expect(isArray(new Array(10))).to.be.true;
      expect(isArray(10)).to.be.false;
    });
  });

  describe('isFunction', function() {
    var isFunction = _.isFunction;
    it('should return for function values', function() {
      expect(isFunction({})).to.be.false;
      expect(isFunction(function() {})).to.be.true;
    });
  });

  describe('isObject', function() {
    var isObject = _.isObject;
    it('should return true for plain objects', function() {
      expect(isObject(null)).to.be.false;
      expect(isObject(undefined)).to.be.false;
      expect(isObject([])).to.be.false;
    });
  });

  describe('isRegExp', function() {
    var isRegExp = _.isRegExp;
    it('should return true for RegExp values', function() {
      expect(isRegExp(/foo/)).to.be.true;
      expect(isRegExp('foo')).to.be.false;
    });
  });

  describe('isString', function() {
    var isString = _.isString;
    it('should return true for string values', function() {
      expect(isString('foo')).to.be.true;
      expect(isString(10)).to.be.false;
    });
  });

  describe('isNumber', function() {
    var isNumber = _.isNumber;
    it('should return  true for numbers', function() {
      expect(isNumber(1)).to.be.true;
      expect(isNumber(NaN)).to.be.true;
      expect(isNumber('0')).to.be.false;
    });
  });

  describe('isNaN', function() {
    var isNaN = _.isNaN;
    it('should return  true for numbers', function() {
      expect(isNaN(1)).to.be.false;
      expect(isNaN(NaN)).to.be.true;
      expect(isNaN('0')).to.be.false;
      expect(isNaN('')).to.be.false;
    });
  });

  describe('isDate', function() {
    var isDate = _.isDate;
    it('should return for Date values', function() {
      expect(isDate(new Date())).to.be.true;
      expect(isDate({})).to.be.false;
    });
  });

  describe('isIterable', function() {
    var isIterable = _.isIterable;
    var indexed = {};
    indexed[0] = 0;
    indexed[1] = 1;
    indexed[2] = 2;
    indexed.length = 3;

    it('should return true for arrays', function() {
      expect(isIterable([])).to.be.true;
    });

    it('should return true for array-like objects', function() {
      expect(isIterable(indexed)).to.be.true;
      expect(isIterable('foo')).to.be.true;
    });

    it('should return false for non-array values', function() {
      expect(isIterable({})).to.be.false;
    });
  });
});
