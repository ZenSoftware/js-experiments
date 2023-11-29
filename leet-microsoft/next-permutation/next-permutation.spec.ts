import { nextPermutation } from './next-permutation';

describe('Next Permutation', () => {
  it('evaluates correcty', () => {
    const nums1 = [1, 2, 4, 3];
    expect(nextPermutation(nums1)).toEqual([1, 3, 2, 4]);

    // const nums1 = [1, 2, 3];
    // expect(nextPermutation(nums1)).toEqual([1, 3, 2]);

    // const nums2 = [3, 2, 1];
    // expect(nextPermutation(nums2)).toEqual([1, 3, 2]);
  });
});
