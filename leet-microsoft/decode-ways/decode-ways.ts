/**
 * https://leetcode.com/problems/decode-ways/
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:
 * 'A' -> "1"
 * 'B' -> "2"
 * ...
 * 'Z' -> "26"
 * To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
 * "AAJF" with the grouping (1 1 10 6)
 * "KJF" with the grouping (11 10 6)
 * Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
 * Given a string s containing only digits, return the number of ways to decode it.
 * The test cases are generated so that the answer fits in a 32-bit integer.
 * 1 <= s.length <= 100
 * s contains only digits and may contain leading zero(s).
 */
export function numDecodings(s: string): number {
  if (s.charAt(0) === '0') return 0;

  const memo: number[] = Array(s.length);

  function dp(i: number) {
    if (i >= s.length) return 1;
    if (s.charAt(i) === '0') return 0;
    if (memo[i] !== undefined) return memo[i];

    let count = dp(i + 1);

    if (i < s.length - 1) {
      const pairVal = Number(s.charAt(i) + s.charAt(i + 1));
      if (pairVal <= 26) {
        count += dp(i + 2);
      }
    }

    memo[i] = count;
    return count;
  }

  return dp(0);
}
