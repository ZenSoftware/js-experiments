/**
 * https://youtu.be/oBt53YbR9Kk?t=4196
 * The function should return an array containing any combination of elements that add up
 * to exactly the targetSum.  If there is no combination that adds up to the targetSum,
 * then return null.
 *
 * If there are multiple combinations possible, you may return any single one.
 *
 * You may assume that all input numbers are nonnegative
 */
function howSum(targetSum: number, numbers: number[]) {
  const table = Array(targetSum + 1).fill([]);

  table[0] = [0];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i].length) {
      for (let n of numbers) {
        if (i + n <= targetSum) {
          table[i + n] = [...table[i], n];
          if (i + n === targetSum) return table[targetSum].splice(1);
        }
      }
    }
  }

  return null;
}

/**
 * m = targetSum
 * n = numbers.length
 *
 * Time: O(m*n)
 * Space: O(m)
 */

console.log(howSum(15, [3, 2, 5, 20000]));
