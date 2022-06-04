/**
 * https://youtu.be/oBt53YbR9Kk?t=13080
 * The function should return a boolean indicating whtether or not it is possible
 * to generate the targetSumSum using numbers from the array.
 *
 * You may use an element of the array as many time as needed.
 *
 * You may assume that all input numbers are nonnegative
 */
function canSum(targetSum: number, numbers: number[]) {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let n of numbers) {
    if (canSum(targetSum - n, numbers)) {
      return true;
    }
  }

  return false;
}

console.log(canSum(200, [10, 5]));
