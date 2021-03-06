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

test('empty string = 0', () => {
  expect(lengthOfLongestSubstring('')).toBe(0);
});

test('1233456 = 4', () => {
  expect(lengthOfLongestSubstring('1233456')).toBe(4);
});
