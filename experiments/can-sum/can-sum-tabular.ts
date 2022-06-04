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
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (let n of numbers) {
        if (i + n <= targetSum) table[i + n] = true;
      }
    }
  }

  console.log(table);
  return table[targetSum];
}

/**
 * m = targetSum
 * n = numbers.length
 *
 * Time: O(m*n)
 * Space: O(m)
 */

console.log(canSum(10, [5, 7]));
