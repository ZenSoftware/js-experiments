/**
 * https://leetcode.com/problems/maximum-subarray/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 */
export function maxSubArray(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let largest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let accum = nums[i];
    if (accum > largest) largest = accum;
    for (let j = i + 1; j < nums.length; j++) {
      accum += nums[j];
      if (accum > largest) largest = accum;
    }
  }

  return largest;
}
