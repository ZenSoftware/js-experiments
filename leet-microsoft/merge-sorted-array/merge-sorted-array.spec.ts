import { merge } from './merge-sorted-array';

describe('Merge Sorted Array', () => {
  it('evaluates correctly 1', () => {
    const nums1 = [1, 2, 3, 4, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 4, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 4, 5, 6]);
  });

  it('evaluates correctly 2', () => {
    const nums1 = [1];
    const nums2 = [];
    merge(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });

  it('evaluates correctly 3', () => {
    const nums1 = [0];
    const nums2 = [1];
    merge(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
  });
});
