/**
 * https://leetcode.com/problems/subsets/
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * All the numbers of nums are unique.
 */
export function subsets(nums: number[]): number[][] {
  if (nums.length === 0) return [[]];

  const firstEl = nums[0];
  const rest = nums.slice(1);
  const withoutFirst = subsets(rest);
  let result: number[][] = [];
  for (let comb of withoutFirst) {
    result.push([...comb]);
    result.push([firstEl, ...comb]);
  }

  return result;
}
