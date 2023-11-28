import { mergeSort } from './divide-conquer-merge-sort';

describe('Merge Sort', () => {
  it('evaluates correctly', () => {
    expect(mergeSort([4, 3, 6, 2, 1, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
