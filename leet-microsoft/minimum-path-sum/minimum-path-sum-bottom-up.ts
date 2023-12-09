/**
 * https://leetcode.com/problems/minimum-path-sum/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 200
 * 0 <= grid[i][j] <= 200
 */
export function minPathSum(grid: number[][]): number {
  const resultRowLength = grid.length + 1;
  const resultColLength = grid[0].length + 1;
  const result: number[][] = [...Array(resultRowLength - 1)].map(() => Array(resultColLength));
  result.push(Array(resultColLength).fill(Infinity));
  for (let row = 0; row < resultRowLength; row++) {
    result[row][resultColLength - 1] = Infinity;
  }
  result[resultRowLength - 1][resultColLength - 2] = 0;

  const maxRowIndex = grid.length - 1;
  const maxColIndex = grid[0].length - 1;
  for (let row = maxRowIndex; row >= 0; row--) {
    for (let col = maxColIndex; col >= 0; col--) {
      result[row][col] = grid[row][col] + Math.min(result[row + 1][col], result[row][col + 1]);
    }
  }

  return result[0][0];
}
