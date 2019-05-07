import type from './type';
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
const isFunction = (obj: any): boolean => {
  return type(obj) === 'function';
};
export default isFunction;
