/**
 * https://leetcode.com/problems/divide-two-integers/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
 * The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
 * Return the quotient after dividing dividend by divisor.
 * Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
 * -231 <= dividend, divisor <= 231 - 1
 * divisor != 0
 */

const MIN = Math.pow(-2, 31);
const MAX = Math.pow(2, 31) - 1;

export function divide(dividend: number, divisor: number): number {
  let quotient = 0;
  let accum = 0;

  const posDividend = Math.abs(dividend);
  const posDivisor = Math.abs(divisor);

  let increment;
  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    increment = 1;
  } else {
    increment = -1;
  }

  while (true) {
    accum += posDivisor;
    if (accum > posDividend) break;
    else quotient += increment;
  }

  if (quotient < MIN) return MIN;
  else if (quotient > MAX) return MAX;

  return quotient;
}
