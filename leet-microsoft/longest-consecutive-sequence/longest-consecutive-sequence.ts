/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */
export function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  let longest = 1;
  let count = 1;

  let left = 0;
  let right = 1;

  while (left < nums.length) {
    if (nums[right - 1] + 1 === nums[right]) {
      count++;
      right++;

      while (nums[right - 1] === nums[right]) {
        right++;
      }

      if (count > longest) longest = count;
    } else {
      count = 1;
      left++;
      right = left + 1;
    }
  }

  return longest;
}
