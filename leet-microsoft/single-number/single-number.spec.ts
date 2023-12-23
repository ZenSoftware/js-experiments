import { singleNumber } from './single-number';

describe('Single Number', () => {
  it('evaluates correctly', () => {
    expect(singleNumber([2, 2, 1])).toEqual(1);
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
    expect(singleNumber([1])).toEqual(1);
  });
});
