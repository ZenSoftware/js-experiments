/**
 * https://leetcode.com/problems/pascals-triangle-ii/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 * 0 <= rowIndex <= 33
 */

export function getRow(rowIndex: number): number[] {
  const fact = factorial();

  // n! / k!(n-k)!
  const binomailCoef = (n, k) => fact(n) / (fact(k) * fact(n - k));

  const rowLength = rowIndex + 1;
  const midIndex = Math.ceil(rowLength / 2) - 1;

  const result: number[] = Array(rowLength);
  result[0] = 1;
  result[rowLength - 1] = 1;

  for (let i = 1; i <= midIndex; i++) {
    result[i] = binomailCoef(rowIndex, i);
  }

  for (let i = midIndex; i >= 1; i--) {
    result[rowLength - 1 - i] = result[i];
  }

  return result;
}

export function factorial() {
  const memo: Record<string, number> = {};

  function calc(n: number) {
    if (memo[n]) return memo[n];
    if (n === 1) return 1;
    const result = n * calc(n - 1);
    memo[n] = result;
    return result;
  }

  return calc;
}
