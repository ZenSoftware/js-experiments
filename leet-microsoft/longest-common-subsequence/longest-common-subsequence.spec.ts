import { longestCommonSubsequence } from './longest-common-subsequence';

describe('', () => {
  it('evaluates correctly', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toEqual(3);
    expect(longestCommonSubsequence('abc', 'abc')).toEqual(3);
    expect(longestCommonSubsequence('abc', 'def')).toEqual(0);
  });
});
