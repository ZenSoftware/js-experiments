function curry(fn: Function) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curried(...args, ...next);
      };
    }
  };
}

const sum = (x, y, z) => x + y + z;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
