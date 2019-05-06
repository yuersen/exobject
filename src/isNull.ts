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
const isNull = (o: any): boolean => {
  return null === o;
};

export default isNull;
