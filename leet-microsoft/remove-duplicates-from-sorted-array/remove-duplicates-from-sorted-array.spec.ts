import { removeDuplicates } from './remove-duplicates-from-sorted-array';

describe('Remove Duplicates from Sorted Array', () => {
  it('evaluates correcty', () => {
    const nums = [1, 1, 2];
    const expected = [1, 2];
    const k = removeDuplicates(nums);
    expect(k).toEqual(2);
    for (let i = 0; i < k; i++) {
      expect(expected[i]).toEqual(nums[i]);
    }
  });
});
