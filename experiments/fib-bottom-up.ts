function fib(n: number) {
  const table = Array(n + 2).fill(0);
  table[1] = 1;

  for (let i = 0; i < n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  console.log(table);
  return table[n];
}

console.log(fib(6));
