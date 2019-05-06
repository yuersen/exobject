(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Exo = {}));
}(this, function (exports) { 'use strict';

  /**
   * Ouput the type of specified parameter.
   *
   * @function
   * @param  {Any} obj Any JavaScript data type
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
      .toLowerCase()
      .replace(/\[|\]/g, '')
      .substring(7);
  };

  /**
   * Determines whether it is an Boolean.
   *
   * @function
   * @param  {Any} obj Parameters to be determined
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
   * @param  {Any} obj Parameters to be determined
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
   * @param  {Any} obj Parameters to be determined
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
   * @param  {Any} obj Parameters to be determined
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
   * @param  {Any} obj Parameters to be determined
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
   * @param  {Any} obj Parameters to be determined
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
   * @param  {Any} obj Parameters to be determined
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
   * @param  {Any} obj Parameters to be determined
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
   * @param  {Any} obj Parameters to be determined
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
  var isNull = function(o) {
    return null === o;
  };

  /**
   * Determines whether it is an Object.
   *
   * @function
   * @param  {Any} obj Parameters to be determined
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
   * @param  {Any} obj Parameters to be determined
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
  exports.type = type;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
