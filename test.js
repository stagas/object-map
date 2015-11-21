import assert from 'assert';
import map from './index.js';

const source = {
  a: 2,
  b: 3,
  c: 4
};

const expected = {
  length: 3,
  values: [2, 3, 4],
  keys: ['a', 'b', 'c'],
  refs: [source, source, source],
  output: { a: 4, b: 6, c: 8 }
};

const results = {
  length: 0,
  values: [],
  keys: [],
  refs: [],
  output: null
};

results.output = map(source, (value, key, obj) => {
  results.length++;
  results.values.push(value);
  results.keys.push(key);
  results.refs.push(obj);
  return value * 2;
});

assert.strictEqual(expected.length, results.length);
assert.deepEqual(expected.values, results.values);
assert.deepEqual(expected.keys, results.keys);
assert.deepEqual(expected.refs, results.refs);
assert.deepEqual(expected.output, results.output);

console.log('ok');
