/**
 * https://leetcode.com/problems/contains-duplicate/
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */
export function containsDuplicate(nums: number[]): boolean {
  const hash: Record<string, true> = {};
  for (let num of nums) {
    if (hash[num]) return true;
    hash[num] = true;
  }
  return false;
}
