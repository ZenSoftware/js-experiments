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
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      const f = nums[i];
      const s = nums[j];
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = f + s + nums[left] + nums[right];
        if (sum === target) {
          results.push([f, s, nums[left], nums[right]]);

          while (nums[left] === nums[left + 1]) {
            left++;
          }

          while (nums[right] === nums[right - 1]) {
            right++;
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }

      while (nums[j] === nums[j + 1]) {
        j++;
      }
      while (nums[i] === nums[i + 1]) {
        i++;
      }
    }
  }

  return results;
}
