import { intToRoman } from './integer-to-roman';

describe('Container With Most Water', () => {
  it('evaluates correctly', () => {
    expect(intToRoman(3)).toEqual('III');
    expect(intToRoman(58)).toEqual('LVIII');
    expect(intToRoman(1994)).toEqual('MCMXCIV');
  });
});
