import { longestPalindrome, isPalindrome } from './longest-palindromic-substring';

describe('palindrome-partitioning', () => {
  it('partition', () => {
    expect(longestPalindrome('zzababa')).toEqual('ababa');
  });

  it('isPalindrome', () => {
    expect(isPalindrome('')).toEqual(true);
    expect(isPalindrome('a')).toEqual(true);
    expect(isPalindrome('ab')).toEqual(false);
    expect(isPalindrome('aba')).toEqual(true);
  });
});
