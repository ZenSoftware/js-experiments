import { findMedianSortedArrays } from './median-of-two-sorted-arrays';

describe('Median of Two Sorted Arrays', () => {
  it('evaluates correcty', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });
});
