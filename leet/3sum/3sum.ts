/**
 * https://leetcode.com/problems/3sum/
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const sum0 = [nums[i], nums[j], nums[k]].sort();
          if (!resultContains(result, sum0)) {
            result.push(sum0);
          }
        }
      }
    }
  }

  return result;
}

function resultContains(result: number[][], s: number[]) {
  for (let r of result) {
    if (r[0] === s[0] && r[1] === s[1] && r[2] === s[2]) {
      return true;
    }
  }
  return false;
}

console.log(threeSum([-1, 0, 1, 0]));
