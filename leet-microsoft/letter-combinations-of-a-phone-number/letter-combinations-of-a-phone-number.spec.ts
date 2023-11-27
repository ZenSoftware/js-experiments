import { letterCombinations as letterCombinationsBacktrack } from './letter-combinations-of-a-phone-number-backtrack';
import { letterCombinations as letterCombinationsLoop } from './letter-combinations-of-a-phone-number';

describe('Letter Combinations of a Phone Number', () => {
  it('evaluates correctly', () => {
    const ans = letterCombinationsBacktrack;
    // const ans = letterCombinationsLoop;
    expect(ans('23').sort()).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
    expect(ans('')).toEqual([]);
    expect(ans('2')).toEqual(['a', 'b', 'c']);
  });
});
