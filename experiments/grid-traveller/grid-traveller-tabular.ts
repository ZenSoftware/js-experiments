/**
 * You are given a grid of m rows & n columns.
 * Starting at the top left, you are only allowed to move down & right.
 * Count the number of ways to arrive at the bottom left
 */

export function gridTraveller(m: number, n: number) {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  const result = gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
  return result;
}

const result = gridTraveller(3, 2);
console.log(result);
