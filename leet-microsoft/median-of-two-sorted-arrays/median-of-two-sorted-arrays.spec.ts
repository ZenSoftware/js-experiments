import { findMedianSortedArrays, merge } from './median-of-two-sorted-arrays';

describe('Median of Two Sorted Arrays', () => {
  it('evaluates median correcty', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });

  it('merges two arrays correcty', () => {
    expect(merge([1], [])).toEqual([1]);
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([2, 2], [2, 2])).toEqual([2, 2, 2, 2]);
  });
});
