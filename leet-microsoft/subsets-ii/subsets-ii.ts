/**
 * https://leetcode.com/problems/subsets-ii/
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 */
export function subsetsWithDup(nums: number[]): number[][] {
  if (nums.length === 0) return [[]];

  let firstEl = nums[0];
  let rest = nums.slice(1);
  let combsWithoutFirst = subsetsWithDup(rest);
  let combsWithFirst: number[][] = [];

  for (let comb of combsWithoutFirst) {
    combsWithFirst.push([firstEl, ...comb]);
  }

  return [...combsWithoutFirst, ...combsWithFirst];
}

console.log(subsetsWithDup([1, 2, 2]));
