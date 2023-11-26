/**
 * https://leetcode.com/problems/3sum-closest/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 * 3 <= nums.length <= 500
 * -1000 <= nums[i] <= 1000
 * -104 <= target <= 104
 */
export function threeSumClosest(nums: number[], target: number): number {
  let best = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        const targetDif = Math.abs(target - sum);
        const bestDif = Math.abs(target - best);
        if (targetDif < bestDif) best = sum;
      }
    }
  }

  return best;
}
