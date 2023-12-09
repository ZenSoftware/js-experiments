/**
 * https://leetcode.com/problems/combinations/
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 * You may return the answer in any order.
 * 1 <= n <= 20
 * 1 <= k <= n
 */
export function combine(n: number, k: number): number[][] {
  let result: number[][] = [];

  function backtrack(start: number, comb: number[]) {
    if (comb.length === k) {
      result.push([...comb]);
      return;
    }

    for (let i = start; i <= n; i++) {
      comb.push(i);
      backtrack(i + 1, comb);
      comb.pop();
    }
  }

  backtrack(1, []);

  return result;
}
