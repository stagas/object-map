# object-map

## install

```
npm install stagas/object-map
```

## usage

### map(obj, fn)

Example:

```js
import map from 'object-map';

const result = map({ a: 2, b: 3, c: 4 }, x => x * 2);

console.log(result);
// => { a: 4, b: 6, c: 8 }
```

## license MIT
