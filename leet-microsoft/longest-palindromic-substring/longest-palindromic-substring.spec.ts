import { longestPalindrome, isPalindrome } from './longest-palindromic-substring';

describe('Longest Palindromic Substring', () => {
  it('evaluates correctly', () => {
    expect(longestPalindrome('a')).toEqual('a');
    expect(longestPalindrome('bb')).toEqual('bb');
    expect(longestPalindrome('babad')).toEqual('bab');
    expect(longestPalindrome('cbbd')).toEqual('bb');
  });

  it('evaluates if string is a palindrome correctly', () => {
    expect(isPalindrome('b')).toEqual(true);
    expect(isPalindrome('bb')).toEqual(true);
    expect(isPalindrome('bab')).toEqual(true);
    expect(isPalindrome('zeez')).toEqual(true);
    expect(isPalindrome('lily')).toEqual(false);
  });
});
