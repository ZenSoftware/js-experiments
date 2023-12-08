/**
 * https://leetcode.com/problems/add-binary/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given two binary strings a and b, return their sum as a binary string.
 * 1 <= a.length, b.length <= 104
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 */
export function addBinary(a: string, b: string): string {
  const binaryA = a.split('').map(v => parseInt(v));
  const binaryB = b.split('').map(v => parseInt(v));
  const longestLength = Math.max(binaryA.length, binaryB.length);
  let carry = 0;
  let result = '';

  for (let i = 0; i < longestLength; i++) {
    let valA = 0;
    if (i < binaryA.length) valA = binaryA[binaryA.length - 1 - i];

    let valB = 0;
    if (i < binaryB.length) valB = binaryB[binaryB.length - 1 - i];

    let sum = valA + valB + carry;

    if (sum === 0 || sum === 2) result = '0' + result;
    else result = '1' + result;

    if (sum < 2) carry = 0;
    else carry = 1;
  }

  if (carry === 1) result = '1' + result;

  return result;
}
