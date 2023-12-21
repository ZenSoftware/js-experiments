/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */
export function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  const cleaned = Array.from(set.values()).sort((a, b) => a - b);

  let longest = 1;

  for (let i = 0; i < cleaned.length - longest; i++) {
    let count = 1;
    for (let j = i + 1; j < cleaned.length; j++) {
      if (cleaned[j - 1] + 1 === cleaned[j]) {
        count++;
        if (count > longest) longest = count;
      } else {
        break;
      }
    }
  }

  return longest;
}
