import { longestPalindrome } from './longest-palindromic-substring';

describe('Longest Palindromic Substring', () => {
  it('evaluates correctly', () => {
    expect(longestPalindrome('babad')).toEqual('bab');
    expect(longestPalindrome('cbbd')).toEqual('bb');
  });
});
