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
export function grayCode(n: number): number[] {
  const max = Math.pow(2, n) - 1;
  const standardSequence: number[] = Array(Math.pow(2, n));
  for (let i = 0; i <= max; i++) {
    standardSequence[i] = i;
  }

  const standardStringSequence = standardSequence.map(x => {
    let binaryString = x.toString(2);
    while (binaryString.length < n) {
      binaryString = '0' + binaryString;
    }
    return binaryString;
  });

  const grayCodeStrings = standardStringSequence.map(x => {
    let grayCode = x.charAt(0);
    for (let i = 0; i < x.length - 1; i++) {
      if (x.charAt(i) === x.charAt(i + 1)) grayCode += 0;
      else grayCode += 1;
    }
    return grayCode;
  });

  return grayCodeStrings.map(x => Number('0b' + x));
}
