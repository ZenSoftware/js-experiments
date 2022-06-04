/**
 * https://youtu.be/oBt53YbR9Kk?t=14847
 * The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum
 *
 * If there is a tie for the shortest combination, you may return any one of the shortest.
 */
function bestSum(targetSum: number, numbers: number[]) {
  const table = Array(targetSum + 1).fill(null);

  table[0] = [];
  let optimal = null;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (let num of numbers) {
        const numIndex = i + num;
        if (numIndex <= targetSum) {
          table[numIndex] = [...table[i], num];

          if (numIndex === targetSum) {
            if (optimal === null || table[targetSum].length < optimal.length) {
              optimal = table[targetSum];
            }
          }
        }
      }
    }
  }

  return optimal;
}

/**
 * Time: O(m^2*m)
 * Space: O(m^2)
 */

console.log(bestSum(11, [2, 5, 6]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [7, 5, 3, 2]));
