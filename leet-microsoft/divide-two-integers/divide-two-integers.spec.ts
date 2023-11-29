import { divide } from './divide-two-integers';

describe('Divide Two Integers', () => {
  it('evaluates correctly', () => {
    expect(divide(10, 3)).toEqual(3);
    expect(divide(-10, -3)).toEqual(3);
    expect(divide(10, -3)).toEqual(-3);
    expect(divide(-10, 3)).toEqual(-3);
    expect(divide(0, 3)).toEqual(0);
    expect(divide(0, -3)).toEqual(0);

    // expect(divide(-2147483648, -1)).toEqual(2147483648);
  });
});
