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
  const memo: Record<string, boolean> = {};

  function dp(index1: number, index2: number, index3: number) {
    let key = `${index1}_${index2}_${index3}`;
    if (memo[key] !== undefined) return memo[key];
    if (index1 > s1.length && index2 > s2.length) return true;

    const char1 = s1.charAt(index1);
    const char2 = s2.charAt(index2);
    const char3 = s3.charAt(index3);

    let result1 = false;
    if (char1 === char3 && index1 <= s1.length) {
      result1 = dp(index1 + 1, index2, index3 + 1);
    }

    let result2 = false;
    if (char2 === char3 && index2 <= s2.length) {
      result2 = dp(index1, index2 + 1, index3 + 1);
    }

    memo[key] = result1 || result2;
    return memo[key];
  }

  return dp(0, 0, 0);
}
