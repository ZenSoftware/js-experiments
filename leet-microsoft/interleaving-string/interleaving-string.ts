/**
 * https://leetcode.com/problems/interleaving-string/
 * Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
 * An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:
 * s = s1 + s2 + ... + sn
 * t = t1 + t2 + ... + tm
 * |n - m| <= 1
 * The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
 * Note: a + b is the concatenation of strings a and b.
 * 0 <= s1.length, s2.length <= 100
 * 0 <= s3.length <= 200
 * s1, s2, and s3 consist of lowercase English letters.
 */

export function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) return false;

  return false;
}
