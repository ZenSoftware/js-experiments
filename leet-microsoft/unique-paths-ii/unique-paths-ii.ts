/**
 * https://leetcode.com/problems/unique-paths-ii/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 * An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.
 * Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * The testcases are generated so that the answer will be less than or equal to 2 * 109.
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1 <= m, n <= 100
 * obstacleGrid[i][j] is 0 or 1.
 */
export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const rowMax = obstacleGrid.length - 1;
  const colMax = obstacleGrid[0].length - 1;
  const memo: Record<string, number> = {};

  if (obstacleGrid[rowMax][colMax] === 1) return 0;

  function dfs(row: number, col: number) {
    let key = `${row},${col}`;
    if (memo[key] !== undefined) return memo[key];
    if (obstacleGrid[row][col] === 1) return 0;
    if (row === rowMax && col === colMax) return 1;

    let result = 0;
    if (row < rowMax) result += dfs(row + 1, col);
    if (col < colMax) result += dfs(row, col + 1);
    memo[key] = result;
    return result;
  }

  return dfs(0, 0);
}
