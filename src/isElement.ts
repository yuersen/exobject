/**
 * Determines whether it is an Element.
 *
 * @function
 * @param  {Any} obj Parameters to be determined
 * @returns {Boolean}
 * @example
 * 
 * // -> true
 * isElement(document.querySelector('#app'));
 *
 * // -> false
 * isElement({});
 *
 * // -> false
 * isElement(2019);
 */
const isElement = (obj: any): boolean => {
  return !!(obj && obj.nodeType === 1);
};
export default isElement;
