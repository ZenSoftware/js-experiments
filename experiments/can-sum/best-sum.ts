/**
 * https://youtu.be/oBt53YbR9Kk?t=6745
 * The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum
 *
 * If there is a tie for the shortest combination, you may return any one of the shortest.
 */
function bestSum(targetSum: number, numbers: number[]) {
  const memo: { [key: string]: any } = {};

  const compute = target => {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    let shortestCombination: any[] | null = null;

    for (let n of numbers) {
      const remainderResult = compute(target - n);

      if (remainderResult !== null) {
        const combination = [...remainderResult, n];
        if (shortestCombination === null || combination.length < shortestCombination.length) {
          shortestCombination = combination;
        }
      }
    }

    memo[target] = shortestCombination;
    return shortestCombination;
  };

  return compute(targetSum);
}

console.log(bestSum(11, [2, 5, 6]));
console.log(bestSum(654, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(377, [1, 4, 5]));
