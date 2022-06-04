/**
 * https://leetcode.com/problems/counting-bits/
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
 * ans[i] is the number of 1's in the binary representation of i.
 */

function countBits(n: number): number[] {
  const result: number[] = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    let temp = i;
    let count = 0;
    while (temp !== 0) {
      if (temp & 1) count++;
      temp = temp >> 1;
    }
    result[i] = count;
  }

  return result;
}

console.time('bench');
countBits(1_000_000);
console.timeEnd('bench');
