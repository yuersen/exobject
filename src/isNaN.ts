import isNumber from './isNumber';

/**
 * Determines whether it is an NaN,It is mostly used to detect the results of parseFloat() and parseInt().
 *
 * @function
 * @param  {Any} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 * 
 * // -> true
 * isNaN(parseInt('Fx'));
 *
 * // -> false
 * isNaN({});
 *
 * // -> false
 * isNaN(2019);
 */
const isNaN = (obj: any): boolean => {
  return isNumber(obj) && obj !== +obj;
};
export default isNaN;
