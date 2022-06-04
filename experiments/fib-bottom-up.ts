function fib(n: number) {
  const table = [0, 1];

  for (let i = 2; i <= n; i++) {
    table.push(table[i - 1] + table[i - 2]);
  }

  console.log(table);
  return table[n];
}

console.log(fib(6));
