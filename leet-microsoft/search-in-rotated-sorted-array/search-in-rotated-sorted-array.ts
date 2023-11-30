/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.
 * 1 <= nums.length <= 5000
 * -104 <= nums[i] <= 104
 * All values of nums are unique.
 * nums is an ascending array that is possibly rotated.
 * -104 <= target <= 104
 */
export function search(nums: number[], target: number): number {
  const pivot = findPivot(nums);
  const firstStart = 0;
  const firstEnd = pivot;

  if (nums[firstStart] <= target && target <= nums[firstEnd]) {
    return binarySearch(nums, target, firstStart, firstEnd);
  } else {
    const secondStart = pivot + 1;
    const secondEnd = nums.length - 1;
    return binarySearch(nums, target, secondStart, secondEnd);
  }
}

function findPivot(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return i - 1;
  }
  return 0;
}

function binarySearch(nums: number[], target: number, start: number, end: number): number {
  if (start > end) return -1;

  const half = Math.floor((start + end) / 2);
  if (target === nums[half]) return half;

  if (target < nums[half]) return binarySearch(nums, target, start, half - 1);
  else return binarySearch(nums, target, half + 1, end);
}
