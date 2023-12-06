function fibonacci(n: number) {
  const cache: Record<string, number> = {};

  function fib(num: number) {
    if (num <= 2) return 1;
    if (cache[num] !== undefined) return cache[num];
    const result = fib(num - 2) + fib(num - 1);
    cache[num] = result;
    return result;
  }

  return fib(n);
}

console.log(fibonacci(30));
