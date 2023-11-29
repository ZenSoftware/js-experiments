import { divide } from './divide-two-integers';

describe('Divide Two Integers', () => {
  it('evaluates correctly', () => {
    expect(divide(10, 3)).toEqual(3);
    expect(divide(7, -3)).toEqual(-2);
  });
});
