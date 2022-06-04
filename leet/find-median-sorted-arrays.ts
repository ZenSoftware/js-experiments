/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n))
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergeSize = nums1.length + nums2.length;
  let merged: number[] = Array(mergeSize);

  for (let i = mergeSize - 1; i >= 0; i--) {
    if (nums1.length && nums2.length) {
      if (nums1[nums1.length - 1] > nums2[nums2.length - 1]) {
        merged[i] = nums1.pop() as number;
      } else {
        merged[i] = nums2.pop() as number;
      }
    } else if (nums1.length) {
      merged[i] = nums1.pop() as number;
    } else {
      merged[i] = nums2.pop() as number;
    }
  }

  if (mergeSize % 2 === 0) {
    const half = mergeSize / 2;
    const sum = merged[half - 1] + merged[half];
    return sum / 2;
  } else {
    const middle = Math.floor(mergeSize / 2);
    return merged[middle];
  }
}

console.time('bench');
console.log(findMedianSortedArrays([1, 2, 3], [4, 6]));
console.timeEnd('bench');
