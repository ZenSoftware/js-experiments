function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

onmessage = function (e) {
  console.log(`Started calculating fib(${e.data})`);
  const result = fib(e.data);
  console.log(`Done calculating`);
  postMessage(result);
};
