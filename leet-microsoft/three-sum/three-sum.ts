/**
 * https://leetcode.com/problems/3sum/
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 3 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
 */
export function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const tripplet = [nums[i], nums[j], nums[k]];
          if (!containsDuplicate(results, tripplet)) results.push(tripplet);
        }
      }
    }
  }

  return results;
}

function containsDuplicate(results: number[][], input: number[]): boolean {
  for (let r of results) {
    const evaluate = [...r];
    for (let i = 0; i < 3; i++) {
      const foundNumber = evaluate.findIndex(n => n === input[i]);
      if (foundNumber !== -1) evaluate.splice(foundNumber, 1);
    }
    if (evaluate.length === 0) return true;
  }

  return false;
}
