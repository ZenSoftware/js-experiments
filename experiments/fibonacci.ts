function fibonacci(n: number) {
  const cache: Record<string, number> = {
    1: 1,
    2: 1,
  };

  function fib(num: number) {
    if (cache[num] !== undefined) return cache[num];
    const result = fib(num - 2) + fib(num - 1);
    cache[num] = result;
    return result;
  }

  return fib(n);
}

console.log(fibonacci(200));
