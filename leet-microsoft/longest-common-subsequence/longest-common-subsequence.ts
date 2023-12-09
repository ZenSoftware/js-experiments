/**
 * https://leetcode.com/problems/longest-common-subsequence/
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 * For example, "ace" is a subsequence of "abcde".
 * A common subsequence of two strings is a subsequence that is common to both strings.
 * 1 <= text1.length, text2.length <= 1000
 * text1 and text2 consist of only lowercase English characters.
 */

// Solution: https://www.youtube.com/watch?v=Ua0GhsJSlWM&ab_channel=NeetCode

export function longestCommonSubsequence(text1: string, text2: string): number {
  // Construct grid with an extra dimension for both row and columns.
  // Initialize the extra dimensions with 0s.
  const grid = [...Array(text1.length)].map(() => Array(text2.length + 1));
  grid.push(Array(text2.length + 1).fill(0));
  for (let i = 0; i < text1.length; i++) {
    grid[i][text2.length] = 0;
  }

  // Bottom up approach to filling out grid
  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      const c1 = text1.charAt(i);
      const c2 = text2.charAt(j);
      if (c1 === c2) {
        console.log([c1, c2]);
      }
    }
  }

  return grid[0][0];
}

longestCommonSubsequence('abcde', 'ace');
