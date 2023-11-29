/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 1 <= haystack.length, needle.length <= 104
 * haystack and needle consist of only lowercase English characters.
 */
export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    const current = haystack.substring(i, i + needle.length);
    if (current === needle) return i;
  }
  return -1;
}
