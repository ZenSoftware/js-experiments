import { NumMatrix } from './range-sum-query-2-d-immutable';

describe('Range Sum Query 2D - Immutable', () => {
  it('evaluates correctly', () => {
    const matrix: number[][] = [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5],
    ];
    var obj = new NumMatrix(matrix);
    var param_1 = obj.sumRegion(2, 1, 4, 3);
    expect(param_1).toEqual(8);
  });
});
