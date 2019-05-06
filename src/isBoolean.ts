import type from './type';

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
const isBoolean = (obj: any): boolean => {
  return obj === true || obj === false || type(obj) === 'boolean';
};
export default isBoolean;
