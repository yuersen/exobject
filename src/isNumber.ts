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
const isNumber = (obj: any): boolean => {
  return typeof obj === 'number';
};
export default isNumber;
