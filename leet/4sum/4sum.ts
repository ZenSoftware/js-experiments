/**
 * https://leetcode.com/problems/4sum/
 * Given an array nums of n integers, return an array of all the
 * unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 *
 * - 0 <= a, b, c, d < n
 * - a, b, c, and d are distinct.
 * - nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 * You may return the answer in any order.
 */
function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) return [];

  const result: number[][] = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            result.push([nums[i], nums[j], nums[k], nums[l]].sort(x => x));
          }
        }
      }
    }
  }

  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
