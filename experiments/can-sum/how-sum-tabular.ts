/**
 * https://youtu.be/oBt53YbR9Kk?t=13982
 * The function should return an array containing any combination of elements that add up
 * to exactly the targetSum.  If there is no combination that adds up to the targetSum,
 * then return null.
 *
 * If there are multiple combinations possible, you may return any single one.
 *
 * You may assume that all input numbers are nonnegative
 */
function howSum(targetSum: number, numbers: number[]) {
  const table = Array(targetSum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (let num of numbers) {
        if (i + num <= targetSum) {
          table[i + num] = [...table[i], num];
        }
      }
    }
  }

  return table[targetSum];
}

/**
 * m = targetSum
 * n = numbers.length
 *
 * Time: O(m^2*n)
 * Space: O(m*m)
 */
console.log(howSum(20, [1]));
