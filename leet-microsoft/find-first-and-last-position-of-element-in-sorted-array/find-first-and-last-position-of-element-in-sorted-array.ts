/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * nums is a non-decreasing array.
 * -109 <= target <= 109
 */
export function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1];

  function binarySearch(start: number, end: number) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;

    if (target > nums[mid]) return binarySearch(mid + 1, end);
    else return binarySearch(start, mid - 1);
  }

  const foundIndex = binarySearch(0, nums.length - 1);

  if (foundIndex === -1) return [-1, -1];

  let leftBound = foundIndex;
  let rightBound = foundIndex;
  while (nums[leftBound - 1] === target) {
    leftBound--;
  }
  while (nums[rightBound + 1] === target) {
    rightBound++;
  }

  return [leftBound, rightBound];
}
