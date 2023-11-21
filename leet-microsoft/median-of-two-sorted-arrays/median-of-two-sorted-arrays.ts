/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 * - nums1.length == m
 * - nums2.length == n
 * - 0 <= m <= 1000
 * - 0 <= n <= 1000
 * - 1 <= m + n <= 2000
 * - -106 <= nums1[i], nums2[i] <= 106
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged = merge(nums1, nums2);

  if (merged.length % 2 === 0) {
    const halfWay = merged.length / 2 - 1;
    return (merged[halfWay] + merged[halfWay + 1]) / 2;
  } else {
    const halfWay = Math.floor(merged.length / 2);
    return merged[halfWay];
  }
}

export function merge(nums1: number[], nums2: number[]): number[] {
  const merged: number[] = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 + index2 < nums1.length + nums2.length) {
    if (index1 >= nums1.length) {
      merged.push(nums2[index2]);
      index2++;
    } else if (index2 >= nums2.length) {
      merged.push(nums1[index1]);
      index1++;
    } else {
      const a = nums1[index1];
      const b = nums2[index2];

      if (a < b) {
        merged.push(a);
        index1++;
      } else {
        merged.push(b);
        index2++;
      }
    }
  }

  return merged;
}
