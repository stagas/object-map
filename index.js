import each from 'object-each';

/**
 * Maps `obj` entries with the return
 * value of `fn(value, key, obj)`.
 *
 * @param {Object} obj
 * @param {Function} fn
 * @return {Object}
 */
export default function map(obj, fn) {
  const result = {};

  each(obj, (value, key, obj) => {
    result[key] = fn(value, key, obj);
  });

  return result;
}
