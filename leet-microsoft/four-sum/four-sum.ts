/**
 * https://leetcode.com/problems/4sum/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * You may return the answer in any order.
 * 1 <= nums.length <= 200
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 */
export function fourSum(nums: number[], target: number): number[][] {
  const results: number[][] = [];
  let lp1 = 0;
  let lp2 = 1;
  let rp2 = nums.length - 2;
  let rp1 = nums.length - 1;

  const sum = nums[lp1] + nums[lp2] + nums[rp2] + nums[rp1];
  const quaduplet = [nums[lp1], nums[lp2], nums[rp2], nums[rp1]];
  if (sum === target) {
    results.push(quaduplet);
  }

  return results;
}
