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
  let smallest = Infinity;
  let maxRow = grid.length - 1;
  let maxCol = grid[0].length - 1;

  function dfs(row: number, col: number, total: number) {
    total += grid[row][col];
    if (row === maxRow && col === maxCol) {
      if (total < smallest) smallest = total;
      return;
    }

    if (row < maxRow) dfs(row + 1, col, total);
    if (col < maxCol) dfs(row, col + 1, total);
  }

  dfs(0, 0, 0);
  return smallest;
}
