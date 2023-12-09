import { setZeroes } from './set-matrix-zeroes';

describe('Set Matrix Zeroes', () => {
  it('evaluates correctly 1', () => {
    let mat = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    setZeroes(mat);

    expect(mat).toEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
  });

  it('evaluates correctly 2', () => {
    let mat = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];
    setZeroes(mat);

    expect(mat).toEqual([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ]);
  });
});
