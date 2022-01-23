import { lengthOfLongestSubstring } from './longest-substring';

test('abcabcbb = 3', () => {
  const result = lengthOfLongestSubstring('abcabcbb');
  expect(result).toBe(3);
});

test('pwwkew = 3', () => {
  const result = lengthOfLongestSubstring('pwwkew');
  expect(result).toBe(3);
});

test('bbbbb = 1', () => {
  const result = lengthOfLongestSubstring('bbbbb');
  expect(result).toBe(1);
});

test('EMPTY_STRING = 0', () => {
  const result = lengthOfLongestSubstring('');
  expect(result).toBe(0);
});

test('1233456 = 5', () => {
  const result = lengthOfLongestSubstring('1233456');
  expect(result).toBe(5);
});
