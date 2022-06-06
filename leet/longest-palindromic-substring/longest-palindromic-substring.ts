/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * Given a string s, return the longest palindromic substring in s.
 *
 * A palindrome string is a string that reads the same backward as forward.
 */

export function longestPalindrome(s: string) {
  let optimal = '';

  for (let i = 0; i < s.length; i++) {
    // expand from center
    const largestSubOdd = expandFromCenter(s, i - 1, i + 1);
    if (largestSubOdd.length > optimal.length) {
      optimal = largestSubOdd;
    }

    const largestSubEven = expandFromCenter(s, i, i + 1);
    if (largestSubEven.length > optimal.length) {
      optimal = largestSubEven;
    }
  }

  if (optimal === '') return s.charAt(0);
  else return optimal;
}

function expandFromCenter(s: string, start: number, end: number) {
  let largestSub = '';
  while (start >= 0 && end < s.length) {
    if (s.charAt(start) !== s.charAt(end)) {
      break;
    }
    largestSub = s.slice(start, end + 1);
    --start;
    ++end;
  }
  return largestSub;
}

console.log(longestPalindrome('abcba'));
