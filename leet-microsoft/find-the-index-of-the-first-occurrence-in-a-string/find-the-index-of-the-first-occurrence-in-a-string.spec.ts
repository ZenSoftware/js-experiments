import { strStr } from './find-the-index-of-the-first-occurrence-in-a-string';

describe('Find the Index of the First Occurrence in a String', () => {
  it('evaluates correctly', () => {
    expect(strStr('sadbutsad', 'sad')).toEqual(0);
    expect(strStr('leetcode', 'leeto')).toEqual(-1);
    expect(strStr('hello', 'll')).toEqual(2);
    expect(strStr('a', 'a')).toEqual(0);
  });
});
