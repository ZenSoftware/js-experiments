/**
 * https://leetcode.com/problems/first-missing-positive/
 * Given an unsorted integer array nums, return the smallest missing positive integer.
 * You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
 * 1 <= nums.length <= 105
 * -231 <= nums[i] <= 231 - 1
 */
export function firstMissingPositive(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) nums[i] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (0 <= idx && idx < nums.length) {
      if (nums[idx] === 0) nums[idx] = -(nums.length + 1);
      else if (nums[idx] > 0) nums[idx] *= -1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) return i + 1;
  }

  return nums.length + 1;
}
