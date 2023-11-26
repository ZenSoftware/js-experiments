import { letterCombinations } from './letter-combinations-of-a-phone-number';

describe('Letter Combinations of a Phone Number', () => {
  it('evaluates correctly', () => {
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
    expect(letterCombinations('')).toEqual([]);
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
  });
});
