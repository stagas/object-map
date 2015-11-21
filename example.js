import map from './index.js';

const result = map({ a: 2, b: 3, c: 4 }, x => x * 2);

console.log(result);
// => { a: 4, b: 6, c: 8 }
