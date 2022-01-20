import { isPalindrome } from './palindrome-number';

test('palindrome should pass leetcode.com test cases', () => {
  expect(isPalindrome(121)).toEqual(true);
  expect(isPalindrome(-121)).toEqual(false);
  expect(isPalindrome(10)).toEqual(false);
  expect(isPalindrome(11)).toEqual(true);
});
