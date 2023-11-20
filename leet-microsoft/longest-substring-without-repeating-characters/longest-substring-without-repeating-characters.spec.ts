import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters';

describe('Longest Substring Without Repeating Characters', () => {
  it('evaluates correcty', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });
});
