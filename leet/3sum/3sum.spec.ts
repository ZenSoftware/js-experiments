import { threeSum } from './3sum';

describe('threeSum', () => {
  it('computes correctly', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(result).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
});
