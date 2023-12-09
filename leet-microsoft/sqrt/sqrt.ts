/**
 * https://leetcode.com/problems/sqrtx/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 * 0 <= x <= 231 - 1
 */
export function mySqrt(x: number): number {
  let low = 1;
  let high = x;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const square = mid * mid;
    if (square === x) return mid;
    if (square <= x) low = mid + 1;
    else high = mid - 1;
  }

  return high;
}
