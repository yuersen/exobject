import type from './type';

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
const isArray = (obj: any): boolean => {
  return type(obj) === 'array';
};

export default isArray;
