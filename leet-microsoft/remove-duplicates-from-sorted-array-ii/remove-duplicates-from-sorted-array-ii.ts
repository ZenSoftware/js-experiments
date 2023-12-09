/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 * Return k after placing the final result in the first k slots of nums.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 * 1 <= nums.length <= 3 * 104
 * -104 <= nums[i] <= 104
 * nums is sorted in non-decreasing order.
 */
export function removeDuplicates(nums: number[]): number {
  let i = 0;
  let k = nums.length;
  while (i < k) {
    const current = nums[i];
    let count = 1;
    i++;

    while (nums[i] === current) {
      count++;
      i++;
      if (i >= k) break;
    }

    if (count > 2) {
      const removeCount = count - 2;
      for (let s = i; s < k; s++) {
        nums[s - removeCount] = nums[s];
      }
      k -= removeCount;
      i -= removeCount;
    }
  }
  return k;
}
