import { kthSmallest } from './kth-smallest-element-in-a-sorted-matrix';

describe('Kth Smallest Element in a Sorted Matrix', () => {
  it('evaluates correctly', () => {
    const matrix1 = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ];
    expect(kthSmallest(matrix1, 8)).toEqual(13);

    const matrix2 = [[-5]];
    expect(kthSmallest(matrix2, 1)).toEqual(-5);
  });
});
