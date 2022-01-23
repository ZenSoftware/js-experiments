import { lengthOfLongestSubstring } from './longest-substring';

test('leetcode test 1', () => {
  const result = lengthOfLongestSubstring('abcabcbb');
  expect(result).toBe(3);
});

test('leetcode test 3', () => {
  const result = lengthOfLongestSubstring('pwwkew');
  expect(result).toBe(3);
});

test('leetcode test 2', () => {
  const result = lengthOfLongestSubstring('bbbbb');
  expect(result).toBe(1);
});

test('leetcode test 4', () => {
  const result = lengthOfLongestSubstring('');
  expect(result).toBe(0);
});
