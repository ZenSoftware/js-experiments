/**
 * https://leetcode.com/problems/single-number/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 1 <= nums.length <= 3 * 10^4
 * -3 * 10^4 <= nums[i] <= 3 * 10^4
 * Each element in the array appears twice except for one element which appears only once.
 */

export function singleNumber(nums: number[]): number {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]);
    if (count === undefined) count = 0;
    map.set(nums[i], ++count);
  }

  for (let [key, count] of map) {
    if (count === 1) return key;
  }

  throw 'No unique element exists';
}
