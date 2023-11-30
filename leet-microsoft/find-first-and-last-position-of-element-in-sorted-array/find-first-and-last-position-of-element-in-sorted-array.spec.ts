import { searchRange } from './find-first-and-last-position-of-element-in-sorted-array';

describe('Find First and Last Position of Element in Sorted Array', () => {
  it('evaluates correctly', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    expect(searchRange([], 0)).toEqual([-1, -1]);
  });
});
