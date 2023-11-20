/**
 * https://leetcode.com/problems/two-sum/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * Time: O(n)
 * Space: O(n);
 */
export function twoSum(nums: number[], target: number): number[] {
  const hash: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const memo = hash[target - nums[i]];
    if (memo !== undefined) return [memo, i];
    else hash[nums[i]] = i;
  }

  throw new Error('There is no answer');
}
