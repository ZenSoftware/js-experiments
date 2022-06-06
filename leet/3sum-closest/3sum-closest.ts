/**
 * https://leetcode.com/problems/3sum-closest/
 * Given an integer array nums of length n and an integer target,
 * find three integers in nums such that the sum is closest to target.
 *
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 */
function threeSumClosest(nums: number[], target: number): number {
  let closestDiff = Infinity;
  let closest = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        const diff = Math.abs(sum - target);
        if (diff < closestDiff) {
          closestDiff = diff;
          closest = sum;
        }
      }
    }
  }

  return closest;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
