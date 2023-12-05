function memoizeFn(fn: Function, context?) {
  const cache: Record<string, any> = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) return cache[key];

    const result = fn.apply(context ?? this, args);
    cache[key] = result;
    return result;
  };
}

const clumsyProduct = (num1: number, num2: number) => {
  for (let i = 1; i <= 1_000_000; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = memoizeFn(clumsyProduct);

console.time('first');
memoizedClumsyProduct(3, 4);
console.timeEnd('first');

console.time('second');
memoizedClumsyProduct(3, 4);
memoizedClumsyProduct(3, 4);
memoizedClumsyProduct(3, 4);
memoizedClumsyProduct(3, 4);
memoizedClumsyProduct(3, 4);
console.timeEnd('second');
