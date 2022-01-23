import { lengthOfLongestSubstring } from './longest-substring';

test('abcabcbb = 3', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
});

test('pwwkew = 3', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});

test('bbbbb = 1', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
});

test('EMPTY_STRING = 0', () => {
  expect(lengthOfLongestSubstring('')).toBe(0);
});

test('1233456 = 5', () => {
  expect(lengthOfLongestSubstring('1233456')).toBe(5);
});
