/**
 * https://youtu.be/oBt53YbR9Kk?t=4196
 * The function should return a boolean indicating whtether or not it is possible
 * to generate the targetSum using numbers from the array.
 *
 * You may use an elemeent of the array as many time as needed.
 *
 * You may assume that all input numbers are nonnegative
 */
function canSum(targetSum: number, numbers: number[]) {
  const memo: { [key: string]: any } = {};

  const compute = target => {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;

    for (let n of numbers) {
      if (compute(target - n)) {
        return true;
      }
    }

    memo[target] = false;
    return false;
  };

  return compute(targetSum);
}

console.log(canSum(200, [11]));
