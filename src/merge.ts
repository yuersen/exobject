import type from './type';

/**
 *  Copy the target and removing any reference
 * @param {Any} target Copy target
 * @returns {Any}
 */
const copy = (target: any): any => {
  let copies = target;
  const targetType = type(target);

  if (targetType === 'array') {
    copies = [];
    for (let i = 0, l = target.length; i < l; i++) {
      copies[i] = copy(target[i]);
    }
  } else if (targetType === 'object') {
    copies = {};
    for (let key in target) {
      copies[key] = copy(target[key]);
    }
  }
  return copies;
};

/**
 * Merge two objects recursively.
 *
 * @function
 * @param {Object} target The target object
 * @param {Object[]} sources The source object
 */
const recursive = (target: any, source: any): any => {
  if (type(target) !== 'object') {
    return source;
  }
  for (const key in source) {
    if (type(target[key]) === 'object' && type(source[key]) === 'object') {
      target[key] = recursive(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};

/**
 * Merge a given object with all the properties in passed-in object(s).
 *
 * @function
 * @param {Object} target The target object
 * @param {Object[]} sources The source object
 * @returns {Object}
 */
const merge = (target: any, ...sources: object[]): any => {
  const length = sources.length;

  for (let i = 0; i < length; i++) {
    const next: any = sources[i];

    if (next !== null) {
      for (const key in next) {
        target[key] = recursive(target[key], copy(next[key]));
      }
    }
  }
  return target;
};

export default merge;
