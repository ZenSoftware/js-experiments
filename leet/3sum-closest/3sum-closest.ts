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
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] !== nums[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        if (sum === target) {
          return target;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }

        const diff = Math.abs(target - sum);
        if (diff < closestDiff) {
          closest = sum;
          closestDiff = diff;
        }
      }
    }
  }

  return closest;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
