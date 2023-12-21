/**
 * https://leetcode.com/problems/valid-palindrome/
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 1 <= s.length <= 2 * 105
 * s consists only of printable ASCII characters.
 */
export function isPalindrome(s: string): boolean {
  let cleaned = '';

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (VALID_CHARACTERS.includes(char)) {
      cleaned += char.toLowerCase();
    }
  }

  let l = 0;
  let r = cleaned.length - 1;

  while (l <= r) {
    if (cleaned.charAt(l) !== cleaned.charAt(r)) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

const VALID_CHARACTERS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

isPalindrome('A man, a plan, a canal: Panama');
