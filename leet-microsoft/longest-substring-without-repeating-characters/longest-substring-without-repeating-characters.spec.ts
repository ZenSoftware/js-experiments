import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters';

describe('Longest Substring Without Repeating Characters', () => {
  it('evaluates correcty', () => {
    // expect(lengthOfLongestSubstring('')).toEqual(0);
    // expect(lengthOfLongestSubstring('a')).toEqual(1);
    // expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    // expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    // expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);

    // expect(lengthOfLongestSubstring('aba')).toEqual(2);
    expect(lengthOfLongestSubstring('bbb')).toEqual(1);
  });
});
