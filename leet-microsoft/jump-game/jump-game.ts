/**
 * https://leetcode.com/problems/jump-game/
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 * 1 <= nums.length <= 104
 * 0 <= nums[i] <= 105
 */

// Solution: https://leetcode.com/problems/jump-game/solutions/2531333/simple-ts-with-explanation/

export function canJump(nums: number[]): boolean {
  let left = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (left === 0) return false;
    left = Math.max(left - 1, nums[i]);
  }

  return true;
}
