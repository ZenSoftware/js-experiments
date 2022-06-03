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
  const memo: { [key: string]: any } = {};

  const compute = target => {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    for (let n of numbers) {
      const remainderResult = compute(target - n);
      if (remainderResult !== null) {
        // memo[target] = [...remainderResult, n];
        // return memo[target];
        return [...remainderResult, n];
      }
    }

    memo[target] = null;
    return null;
  };

  return compute(targetSum);
}

/**
 * m = targetSum
 * n = numbers.length
 *
 * Brute force
 * Time: O(m^n)
 * Space: O(m)
 *
 * Memoized
 * Time: O(m*n)
 * Space: O(m^2)
 */

console.log(howSum(11, [2, 5, 6]));
console.log(howSum(30000, [7, 14]));
