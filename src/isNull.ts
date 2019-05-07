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
const isNull = (obj: any): boolean => {
  return null === obj;
};

export default isNull;
