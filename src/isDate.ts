import type from './type';

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
const isDate = (obj: any): boolean => {
  return type(obj) === 'date';
};

export default isDate;
