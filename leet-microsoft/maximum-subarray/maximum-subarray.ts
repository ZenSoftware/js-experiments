/**
 * https://leetcode.com/problems/maximum-subarray/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 */

// Solution: https://leetcode.com/problems/maximum-subarray/solutions/4055370/dynamic-programming-o-n/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
export function maxSubArray(nums: number[]): number {
  let largest = nums[0];
  let currentSubProb = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (currentSubProb + nums[i] > nums[i]) currentSubProb += nums[i];
    else currentSubProb = nums[i];
    largest = Math.max(largest, currentSubProb);
  }

  return largest;
}
