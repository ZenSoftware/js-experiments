/**
 * https://youtu.be/oBt53YbR9Kk?t=14847
 * The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum
 *
 * If there is a tie for the shortest combination, you may return any one of the shortest.
 */
function bestSum(targetSum: number, numbers: number[]) {
  const table = Array(targetSum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        const n = i + num;
        if (n <= targetSum) {
          if (!table[n] || table[n].length > combination.length) {
            table[n] = combination;
          }
        }
      }
    }
  }

  return table[targetSum];
}

/**
 * Time: O(m^2*m)
 * Space: O(m^2)
 */

console.log(bestSum(11, [2, 5, 6]));
console.log(bestSum(8, [1, 2, 3, 5, 2000]));
console.log(bestSum(8, [7, 5, 3, 2]));
