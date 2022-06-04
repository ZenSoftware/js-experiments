/**
 * You are given a grid of m rows & n columns.
 * Starting at the top left, you are only allowed to move down & right.
 * Count the number of ways to arrive at the bottom left
 */

function gridTraveller(row: number, col: number) {
  if (row === 0 || col === 0) return 0;
  if (row === 1 && col === 1) return 1;

  const result = gridTraveller(row - 1, col) + gridTraveller(row, col - 1);

  return result;
}

console.log(gridTraveller(200, 5));
