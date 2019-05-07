/**
 * Ouput the type of specified parameter.
 *
 * @function
 * @param  {*} obj Any JavaScript data type
 * @returns {String}
 * @example
 *
 * // -> string
 * type('2019');
 * // -> array
 * type([]);
 * // -> object
 * type({});
 * // -> boolean
 * type(true);
 * // -> number
 * type(2019);
 * // -> function
 * type(function test() {});
 * // -> date
 * type(new Date());
 * // -> regexp
 * type(new RegExp('fx'));
 * // -> null
 * type(null);
 * // -> undefined
 * type(undefined);
 */
const type = (obj: any): string => {
  return {}.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase();
};
export default type;
