// https://leetcode.com/problems/two-sum/

export function twoSumBrute(nums: number[], target: number): number[] | void {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

export function twoSumHash(nums: number[], target: number): number[] | void {
  const dict: Record<number, number> = {};

  for (let [index, val] of nums.entries()) {
    const lookupIndex = dict[target - val];
    if (lookupIndex !== undefined) return [lookupIndex, index];
    dict[val] = index;
  }
}

const testNums = [-1, 2, 11, 15, 7];
const testTarget = 9;

const bruteResult = twoSumBrute(testNums, testTarget);
console.log('twoSumBrute', bruteResult);

const hashResult = twoSumHash(testNums, testTarget);
console.log('twoSumHash', hashResult);
