import { maxSubArray } from './maximum-subarray';

describe('Maximum Subarray', () => {
  it('evaluates correctly', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
    expect(maxSubArray([1])).toEqual(1);
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
    expect(maxSubArray([-2, 1])).toEqual(1);
  });
});
