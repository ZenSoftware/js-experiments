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
  if (s.length === 0) return 0;

  function dfs(index: number) {
    if (index >= s.length) {
      return 1;
    }

    let total = 0;

    if (s.charAt(index) !== '0') {
      total = dfs(index + 1);

      if (index < s.length - 1) {
        if (Number(s.charAt(index) + s.charAt(index + 1)) <= 26) {
          total += dfs(index + 2);
        }
      }
    }

    return total;
  }

  return dfs(0);
}
