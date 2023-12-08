/**
 * https://leetcode.com/problems/plus-one/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 * digits does not contain any leading 0's.
 */
export function plusOne(digits: number[]): number[] {
  const result: number[] = Array(digits.length);
  let carry = 0;
  let sum = digits[digits.length - 1] + 1;
  if (sum < 10) {
    result[digits.length - 1] = sum;
  } else {
    result[digits.length - 1] = 0;
    carry = 1;
  }

  let i = digits.length - 2;
  while (i >= 0) {
    const sum = digits[i] + carry;
    if (sum < 10) {
      result[i] = sum;
      carry = 0;
    } else {
      result[i] = 0;
      carry = 1;
    }
    i--;
  }

  if (carry === 1) result.unshift(1);

  return result;
}
