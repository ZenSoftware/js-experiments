/**
 * You are given a grid of m rows & n columns.
 * Starting at the top left, you are only allowed to move down & right.
 * Count the number of ways to arrive at the bottom left
 */

function gridTraveller(row: number, col: number) {
  const grid = Array(row + 1)
    .fill(null)
    .map(() => Array(col + 1).fill(0));

  for (let r = 1; r <= row; r++) {
    grid[r][1] = 1;
  }

  for (let c = 1; c <= col; c++) {
    grid[1][c] = 1;
  }

  for (let r = 2; r <= row; r++) {
    for (let c = 2; c <= col; c++) {
      grid[r][c] = grid[r - 1][c] + grid[r][c - 1];
    }
  }

  console.log(grid);
  return grid[row][col];
}

console.log(gridTraveller(5, 3));
