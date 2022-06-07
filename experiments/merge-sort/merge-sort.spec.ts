import { mergeSort } from './merge-sort';

describe('mergeSort', () => {
  it('sorts correctly', () => {
    expect(mergeSort([3, 6, 7, 1, 2, 9, 4, 8, 5])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
