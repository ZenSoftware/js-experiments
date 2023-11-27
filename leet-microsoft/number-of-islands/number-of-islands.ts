/**
 * https://leetcode.com/problems/number-of-islands/
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
 */

export function numIslands(grid: string[][]): number {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (grid[i][j] === '1') {
        ++count;
        dfs(grid, i, j);
      }
    }
  }
  return count;
}

function dfs(grid: string[][], row, col) {
  if (
    row < 0 ||
    row > grid.length - 1 ||
    col < 0 ||
    col > grid[row].length - 1 ||
    grid[row][col] === '0'
  ) {
    return;
  }

  grid[row][col] = '0';
  dfs(grid, row + 1, col);
  dfs(grid, row - 1, col);
  dfs(grid, row, col + 1);
  dfs(grid, row, col - 1);
}
