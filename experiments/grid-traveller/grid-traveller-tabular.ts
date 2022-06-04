/**
 * You are given a grid of m rows & n columns.
 * Starting at the top left, you are only allowed to move down & right.
 * Count the number of ways to arrive at the bottom left
 */

function gridTraveller(row: number, col: number) {
  const grid = Array(row).fill([]);

  for (let r = 0; r < row; r++) {
    grid[r][0] = 1;
  }

  for (let c = 0; c < col; c++) {
    grid[0][c] = 1;
  }

  for (let r = 1; r < row; r++) {
    for (let c = 1; c < col; c++) {
      grid[r][c] = grid[r - 1][c] + grid[r][c - 1];
    }
  }

  console.log(grid);
  return grid[row - 1][col - 1];
}

console.log(gridTraveller(5, 3));
