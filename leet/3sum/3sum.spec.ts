import { threeSum } from './3sum';

describe('threeSum', () => {
  it('computes small sample correctly', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(result).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it('computes large sample correctly', () => {
    //[ -1, -1, -2, -3, -4, 0, 0, 1, 2, 3, 4 ]
    const result = threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
    result.sort((a, b) => a[0] - b[0]);
    expect(result).toEqual([
      [
        [-4, 0, 4], //[ -4, 0, 4 ]
        [-4, 1, 3], //[ -4, 1, 3 ]
        [-3, -1, 4], // ??
        [-3, 0, 3], //[ -3, 0, 3 ]
        [-3, 1, 2], //[ -3, 1, 2 ]
        [-2, -1, 3], // ??
        [-2, 0, 2], //[ -2, 0, 2 ]
        [-1, -1, 2], //[ -1, -1, 2 ]
        [-1, 0, 1], //[ -1, 0, 1 ]
      ],
    ]);
  });
});
