/**
 * https://leetcode.com/problems/3sum/
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 3 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
 */

/**
 * Two-pointer approach
 *
 * Time complexity: O(n^2)
 * There is an outter for loop, with an inner while loop
 *
 * Space complexity: O(1)
 * This is because it can find the target value in the original sorted array
 */
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const results: number[][] = [];

  for (let fp = 0; fp < nums.length - 2; fp++) {
    let lp = fp + 1;
    let rp = nums.length - 1;

    while (lp < rp) {
      const sum = nums[fp] + nums[lp] + nums[rp];

      if (sum === 0) {
        results.push([nums[fp], nums[lp], nums[rp]]);

        while (nums[lp] === nums[lp + 1]) {
          lp++;
        }

        while (nums[rp] === nums[rp - 1]) {
          rp--;
        }

        lp++;
        rp--;
      } else if (sum < 0) {
        lp++;
      } else {
        rp--;
      }
    }

    while (nums[fp] === nums[fp + 1]) {
      fp++;
    }
  }

  return results;
}
