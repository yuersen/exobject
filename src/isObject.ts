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
const isObject = (obj: any): boolean => {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
};
export default isObject;
