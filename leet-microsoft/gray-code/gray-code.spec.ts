import { grayCode } from './gray-code';

describe('Gray Code', () => {
  it('evaluates correctly', () => {
    expect(grayCode(1)).toEqual([0, 1]);
    expect(grayCode(2)).toEqual([0, 1, 2, 3]);
    expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4]);
  });
});
