/**
 * https://leetcode.com/problems/edit-distance/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
 * You have the following three operations permitted on a word:
 * Insert a character
 * Delete a character
 * Replace a character
 * 0 <= word1.length, word2.length <= 500
 * word1 and word2 consist of lowercase English letters.
 */

// Solution: https://www.youtube.com/watch?v=XYi2-LPrwm4&t=21s&ab_channel=NeetCode

export function minDistance(word1: string, word2: string): number {
  const grid = [...Array(word1.length + 1)].map(() => Array(word2.length + 1));

  for (let i = 0; i <= word1.length; i++) {
    grid[i][word2.length] = word1.length - i;
  }

  for (let j = 0; j < word2.length; j++) {
    grid[word1.length][j] = word2.length - j;
  }

  for (let i = word1.length - 1; i >= 0; i--) {
    for (let j = word2.length - 1; j >= 0; j--) {
      let c1 = word1.charAt(i);
      let c2 = word2.charAt(j);
      if (c1 === c2) {
        grid[i][j] = grid[i + 1][j + 1];
      } else {
        grid[i][j] = 1 + Math.min(grid[i][j + 1], grid[i + 1][j], grid[i + 1][j + 1]);
      }
    }
  }

  return grid[0][0];
}
