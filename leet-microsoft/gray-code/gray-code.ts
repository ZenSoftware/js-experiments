/**
 * https://leetcode.com/problems/gray-code/
 * An n-bit gray code sequence is a sequence of 2n integers where:
 * Every integer is in the inclusive range [0, 2n - 1],
 * The first integer is 0,
 * An integer appears no more than once in the sequence,
 * The binary representation of every pair of adjacent integers differs by exactly one bit, and
 * The binary representation of the first and last integers differs by exactly one bit.
 * Given an integer n, return any valid n-bit gray code sequence.
 * 1 <= n <= 16
 */

// Solution: https://leetcode.com/problems/gray-code/solutions/4272838/binary-shift/
export function grayCode(n: number): number[] {
  const result: number[] = [];
  const size = 1 << n;

  for (let i = 0; i < size; i++) {
    result.push(i ^ (i >> 1));
  }

  return result;
}
