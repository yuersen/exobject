'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Ouput the type of specified parameter.
 *
 * @function
 * @param  {*} obj Any JavaScript data type
 * @returns {String}
 * @example
 *
 * // -> string
 * type('2019');
 * // -> array
 * type([]);
 * // -> object
 * type({});
 * // -> boolean
 * type(true);
 * // -> number
 * type(2019);
 * // -> function
 * type(function test() {});
 * // -> date
 * type(new Date());
 * // -> regexp
 * type(new RegExp('fx'));
 * // -> null
 * type(null);
 * // -> undefined
 * type(undefined);
 */
var type = function(obj) {
  return {}.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase();
};

/**
 * Determines whether it is an Boolean.
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * isBoolean(true);
 *
 * // -> false
 * isBoolean([]);
 *
 * // -> false
 * isBoolean({});
 */
var isBoolean = function(obj) {
  return obj === true || obj === false || type(obj) === 'boolean';
};

/**
 * Determines whether it is an String.
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * isString('2019');
 *
 * // -> false
 * isString(function() {});
 *
 * // -> false
 * isString(2019);
 */
var isString = function(obj) {
  return typeof obj === 'string';
};

/**
 * Determines whether it is an Undefined.
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * isUndefined(undefined);
 *
 * // -> false
 * isUndefined(function() {});
 *
 * // -> false
 * isUndefined(2019);
 */
var isUndefined = function(obj) {
  return obj === void 0;
};

/**
 * Determines whether it is an Number.
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * isNumber(2019);
 *
 * // -> false
 * isNumber({});
 *
 * // -> false
 * isNumber(true);
 */
var isNumber = function(obj) {
  return typeof obj === 'number';
};

/**
 * Determines whether it is an NaN,It is mostly used to detect the results of parseFloat() and parseInt().
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * isNaN(parseInt('Fx'));
 *
 * // -> false
 * isNaN({});
 *
 * // -> false
 * isNaN(2019);
 */
var isNaN = function(obj) {
  return isNumber(obj) && obj !== +obj;
};

/**
 * Determines whether it is an Date.
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * isDate(new Date());
 *
 * // -> false
 * isDate({});
 *
 * // -> false
 * isDate(2019);
 */
var isDate = function(obj) {
  return type(obj) === 'date';
};

/**
 * Determines whether it is an Element.
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * isElement(document.querySelector('#app'));
 *
 * // -> false
 * isElement({});
 *
 * // -> false
 * isElement(2019);
 */
var isElement = function(obj) {
  return !!(obj && obj.nodeType === 1);
};

/**
 * Determines whether it is an Function.
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * isFunction(function test() {});
 *
 * // -> false
 * isFunction({});
 *
 * // -> false
 * isFunction(2019);
 */
var isFunction = function(obj) {
  return type(obj) === 'function';
};

/**
 * Determines whether it is an null.
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * isNull(null);
 *
 * // -> false
 * isNull({});
 *
 * // -> false
 * isNull(2019);
 */
var isNull = function(obj) {
  return null === obj;
};

/**
 * Determines whether it is an Object.
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * isObject({});
 *
 * // -> false
 * isObject(function() {});
 *
 * // -> false
 * isObject(2019);
 */
var isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
};

/**
 * Determines whether it is an array.
 *
 * @function
 * @param  {*} obj Parameters to be determined
 * @return {Boolean}  If is an array return true
 * @example
 *
 * // -> true
 * isArray([]);
 *
 * // -> false
 * isArray(1);
 *
 * // -> false
 * isArray({})
 */
var isArray = function(obj) {
  return type(obj) === 'array';
};

/**
 * Copy the values of all enumerable own properties from one or more source objects to a target object.
 *
 * @function
 * @param {Object} target The target object
 * @param {Object[]} sources The source object
 * @returns {Object}
 * @example
 *
 * // {name: 'fiy', version: '1.0.0'}
 * assign({name: 'fiy'}, {version: '1.0.0'})
 */
var assign = function(target) {
  var sources = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    sources[_i - 1] = arguments[_i];
  }
  if (target == null) {
    // TypeError if undefined or null
    throw new TypeError('Cannot convert undefined or null to object');
  }
  var length = sources.length;
  for (var index = 0; index < length; index++) {
    var next = sources[index];
    if (next !== null) {
      // Skip over if undefined or null
      for (var key in next) {
        // Avoid bugs when hasOwnProperty is shadowed
        if ({}.hasOwnProperty.call(next, key)) {
          target[key] = next[key];
        }
      }
    }
  }
  return target;
};

/**
 *  Copy the target and removing any reference
 *
 * @param {*} target Copy target
 * @returns {*}
 */
var copy = function(target) {
  var copies = target;
  var targetType = type(target);
  if (targetType === 'array') {
    copies = [];
    for (var i = 0, l = target.length; i < l; i++) {
      copies[i] = copy(target[i]);
    }
  } else if (targetType === 'object') {
    copies = {};
    for (var key in target) {
      copies[key] = copy(target[key]);
    }
  }
  return copies;
};
/**
 * Merge two objects recursively.
 *
 * @function
 * @param {Object} target The target object
 * @param {Object[]} source The source object
 */
var recursive = function(target, source) {
  if (type(target) !== 'object') {
    return source;
  }
  for (var key in source) {
    if (type(target[key]) === 'object' && type(source[key]) === 'object') {
      target[key] = recursive(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};
/**
 * Merge a given object with all the properties in passed-in object(s).
 *
 * @function
 * @param {Object} target The target object
 * @param {Object[]} sources The source object
 * @returns {Object}
 */
var merge = function(target) {
  var sources = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    sources[_i - 1] = arguments[_i];
  }
  var length = sources.length;
  for (var i = 0; i < length; i++) {
    var next = sources[i];
    if (next !== null) {
      for (var key in next) {
        target[key] = recursive(target[key], copy(next[key]));
      }
    }
  }
  return target;
};

exports.assign = assign;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isDate = isDate;
exports.isElement = isElement;
exports.isFunction = isFunction;
exports.isNaN = isNaN;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.merge = merge;
exports.type = type;
