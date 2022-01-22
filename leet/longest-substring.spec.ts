import { lengthOfLongestSubstring } from './longest-substring';

test('leetcode test 1', () => {
  const result = lengthOfLongestSubstring('abcabcbb');
  expect(result).toBe('abc');
});
