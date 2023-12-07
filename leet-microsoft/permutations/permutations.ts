/**
 * https://leetcode.com/problems/permutations/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 */
export function permute(nums: number[]): number[][] {
  if (nums.length === 0) return [[]];

  const firstEl = nums[0];
  const rest = nums.slice(1);
  const permsWithoutFirst = permute(rest);
  const result: number[][] = [];

  for (let permWithoutFirst of permsWithoutFirst) {
    for (let i = 0; i <= permWithoutFirst.length; i++) {
      const withFirst = [...permWithoutFirst.slice(0, i), firstEl, ...permWithoutFirst.slice(i)];
      result.push(withFirst);
    }
  }

  return result;
}

console.log(permute([1, 2, 3]));
