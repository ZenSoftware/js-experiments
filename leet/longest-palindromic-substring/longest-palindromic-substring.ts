/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * Given a string s, return the longest palindromic substring in s.
 *
 * A palindrome string is a string that reads the same backward as forward.
 */

// @ts-ignore
export function longestPalindrome(s: string): string {
  const result: string = '';

  return result;
}

export function isPalindrome(str: string) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str.charAt(start++) !== str.charAt(end--)) {
      return false;
    }
  }
  return true;
}

console.log(longestPalindrome('zzababa'));
