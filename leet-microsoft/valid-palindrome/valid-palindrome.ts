/**
 * https://leetcode.com/problems/valid-palindrome/
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 1 <= s.length <= 2 * 105
 * s consists only of printable ASCII characters.
 */
export function isPalindrome(s: string): boolean {
  s = s.toLocaleLowerCase();
  let left = 0;
  let right = s.length - 1;

  const validChar = c => ('a' <= c && c <= 'z') || ('0' <= c && c <= '9');

  while (left <= right) {
    let leftChar = s.charAt(left);
    while (!validChar(leftChar)) {
      left++;
      if (left > right) break;
      leftChar = s.charAt(left);
    }

    let rightChar = s.charAt(right);
    while (!validChar(rightChar)) {
      right--;
      if (left > right) break;
      rightChar = s.charAt(right);
    }

    if (leftChar !== rightChar) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
