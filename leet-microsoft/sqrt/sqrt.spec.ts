import { mySqrt } from './sqrt';

describe('Sqrt(x)', () => {
  it('evaluates correctly', () => {
    expect(mySqrt(4)).toEqual(2);
    expect(mySqrt(8)).toEqual(2);
  });
});
