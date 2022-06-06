/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * Given a string s, return the longest palindromic substring in s.
 *
 * A palindrome string is a string that reads the same backward as forward.
 */

export function longestPalindrome(s: string) {
  let optimal = '';

  let dfs = (start: number) => {
    for (let end = start; end < s.length; end++) {
      const current = s.substring(start, end + 1);
      if (isPalindrome(current)) {
        if (current.length > optimal.length) {
          optimal = current;
          dfs(optimal.length);
        } else {
          dfs(end + 1);
        }
      }
    }
  };

  dfs(0);
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

console.log(longestPalindrome('zzababadadadadada'));
