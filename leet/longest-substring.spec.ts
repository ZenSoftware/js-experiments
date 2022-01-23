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

test('1233456 should has a max of 5 contiguous unique characters', () => {
  const result = lengthOfLongestSubstring('1233456');
  expect(result).toBe(5);
});
