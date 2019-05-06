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
const isUndefined = (obj: any): boolean => {
  return obj === void 0;
};
export default isUndefined;
