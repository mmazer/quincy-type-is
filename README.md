### quincy-type-is

A small library of predicate functions for JavaScript value types.

### Install

To install for your project:

`npm install --save-dev quincy-type-is`

Then use the module:

`var type = require('quincy-type-is');`

### API

##### type 

`type(value)` 

 Returns a value's type as a string using `Object.prototype.toString`

`type('name') //=> '[object String]'`

Constants are available for the following:

 - `type.ARGS` (`arguments` object);
 - `type.ARRAY`
 - `type.DATE`
 - `type.FUNCTION` 
 - `type.OBJECT` 
 - `type.NUMBER`
 - `type.REGEX`
 - `type.STRING`
 - `type.UNDEF`
 - `type.NULL`

`type('name') === type.STRING`

##### isSome

`isSome(value)`

Returns `true` if the value is something other than `undefined` or `null` or
`false` if it is either `undefined` or `null`

        var x;
        isSome(x); // => false
        isSome('name'); // => true


##### isNone

`isNone(value)`

Returns `true` if the value is `undefined` or `null`; otherwise,  `false`

        var x;
        isNone(x); // => true
        isNone('name'); // => false

##### isUndef

`isUndef(value)`

Returns `true` if the value is `undefined` or `false` otherwise. 

        var x;
        isUndef(x); // => true

##### isNull

`isNull(value)`

Returns `true` if the value is `null` or `false` otherwise. 

        var x;
        var y = null;
        isNull(x); // => false
        isUndef(y); // => true

##### isArray

`isArray(value)`

Returns `true` if the value is an `Array` or `false`otherwise. 

    isArray([]); // => true

##### isFunction

`isFunction(value)`

Returns `true` if the value is a `function` or `false` otherwise. 

    isFunction({}); // => false
    isFunction(function() {}); // => true

##### isObject

`isObject(value)`

Returns `true` if the value is a plain `Object` or `false` otherwise. 

    isObject({}); // => false
    isObject(function() {}); // => false

#####  isRegExp

`isRegExp(value)`

Returns `true` if the value is a `RegExp` or `false` otherwise.

    isRegExp(/foo/); // => true

##### isString

`isString(value)`

Returns `true` if the value is a `string` or `false` otherwise. 

    isString('a'); // => true

##### isNumber

`isNumber(value)`

Returns `true` if the value is a `number` or `false` otherwise.

#####  isNaN

`isNaN(value)`

Returns `true` if the value  is `NaN` or false otherwise. This implementation
circumvents the coercion done by the global `isNaN`.

    isNaN(2); // => false
    isNaN(''); // => false

#####  isDate

`isDate(value)`

Retuns `true` if the value is a `Date` value or `false` otherwise.

    isDate(new Date()); // => true

##### isIterable
`isIterable(value)`

Returns `true` if the value is an `Array` or an array-like object with a
`length` property.

    isIterable([]); // => true

