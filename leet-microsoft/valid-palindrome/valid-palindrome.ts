/**
 * https://leetcode.com/problems/valid-palindrome/
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 1 <= s.length <= 2 * 105
 * s consists only of printable ASCII characters.
 */
export function isPalindrome(s: string): boolean {
  s = s.toLocaleLowerCase();
  let cleaned = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (validChar(char)) cleaned += char;
  }

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function validChar(c: string) {
  return ('a' <= c && c <= 'z') || ('0' <= c && c <= '9');
}
