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
const isString = (obj: any): boolean => {
  return typeof obj === 'string';
};
export default isString;
