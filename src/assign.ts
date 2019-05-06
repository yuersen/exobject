/**
 * Copy the values of all enumerable own properties from one or more source objects to a target object.
 *
 * @function
 * @param {Object} target The target object
 * @param {Object[]} sources The source object
 * @returns {Object}
 * @example
 *
 * // {name: 'fiy', version: '1.0.0'}
 * assign({name: 'fiy'}, {version: '1.0.0'})
 */
const assign = (target: any, ...sources: object[]): any => {
  if (target == null) {
    // TypeError if undefined or null
    throw new TypeError('Cannot convert undefined or null to object');
  }
  const length = sources.length;

  for (let index = 0; index < length; index++) {
    const next: any = sources[index];

    if (next !== null) {
      // Skip over if undefined or null
      for (const key in next) {
        // Avoid bugs when hasOwnProperty is shadowed
        if ({}.hasOwnProperty.call(next, key)) {
          target[key] = next[key];
        }
      }
    }
  }
  return target;
};
export default assign;
