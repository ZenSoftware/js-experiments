function fib(n: number) {
  const table = Array(n + 2).fill(0);
  table[1] = 1;

  // for (let i = 0; i <= n; i++) {
  //   table[i + 2] = table[i] + table[i + 1];
  // }
  for (let i = 0; i < n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  console.log(table);
  return table[n];
}

console.log(fib(200));

// function fib(n: number) {
//   let prev1 = 1;
//   let prev2 = 1;

//   for (let i = 1; i < n; i++) {
//     const temp1 = prev1;
//     const temp2 = prev2;
//     prev2 = temp1 + temp2;
//     prev1 = temp2;
//   }

//   return prev1;
// }
