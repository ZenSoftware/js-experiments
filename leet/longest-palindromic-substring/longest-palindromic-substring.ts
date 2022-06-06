/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * Given a string s, return the longest palindromic substring in s.
 *
 * A palindrome string is a string that reads the same backward as forward.
 */

export function longestPalindrome(s: string) {
  let optimal = '';

  for (let i = 0; i < s.length; i++) {
    let largestSub = s.charAt(i);
    // expand from center
    let start = i - 1;
    let end = i + 1;
    while (start >= 0 && end < s.length) {
      if (s.charAt(start) !== s.charAt(end)) {
        break;
      }
      largestSub = s.slice(start, end + 1);
      --start;
      ++end;
    }

    // replace optimal if substring is larger
    if (largestSub.length > optimal.length) {
      optimal = largestSub;
    }
  }

  return optimal;
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

console.log(longestPalindrome('abacddc'));
