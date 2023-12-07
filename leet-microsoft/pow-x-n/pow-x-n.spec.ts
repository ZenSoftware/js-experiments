import { myPow } from './pow-x-n';

describe('Pow(x, n)', () => {
  it('evaluates correcty', () => {
    expect(myPow(2.0, 10)).toEqual(1024.0);
    expect(myPow(2.1, 3)).toEqual(9.261);
    expect(myPow(2.0, -2)).toEqual(0.25);
  });
});
