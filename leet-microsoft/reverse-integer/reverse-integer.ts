/**
 * https://leetcode.com/problems/reverse-integer/
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * -231 <= x <= 231 - 1
 */

export function reverse(x: number): number {
  let reversedString: string;
  if (x >= 0) {
    reversedString = x.toString().split('').reverse().join('');
  } else {
    let reversedArray = x.toString().split('').reverse();
    reversedArray.pop();
    reversedString = '-' + reversedArray.join('');
  }

  const reversedNumber = parseInt(reversedString, 10);

  const TWO_TO_THE_31 = 2 ** 31;
  if (-TWO_TO_THE_31 <= reversedNumber && reversedNumber <= TWO_TO_THE_31 - 1) {
    return reversedNumber;
  } else {
    return 0;
  }
}
