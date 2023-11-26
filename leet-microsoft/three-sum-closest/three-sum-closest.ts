/**
 * https://leetcode.com/problems/3sum-closest/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 * 3 <= nums.length <= 500
 * -1000 <= nums[i] <= 1000
 * -104 <= target <= 104
 */

/**
 * Two-pointer approach
 * Time: O(n^2)
 * Space: O(1)
 */
export function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let bestDistance = Infinity;
  let best = nums[0] + nums[1] + nums[2];

  for (let fp = 0; fp < nums.length - 2; fp++) {
    let lp = fp + 1;
    let rp = nums.length - 1;

    while (lp < rp) {
      const sum = nums[fp] + nums[lp] + nums[rp];
      const currentDistance = Math.abs(target - sum);

      if (currentDistance === 0) {
        return target;
      } else if (currentDistance < bestDistance) {
        best = sum;
        bestDistance = currentDistance;
      }

      if (sum < target) {
        lp++;
      } else {
        rp--;
      }
    }
  }

  return best;
}
