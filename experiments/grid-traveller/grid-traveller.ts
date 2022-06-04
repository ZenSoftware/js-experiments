/**
 * You are given a grid of m rows & n columns.
 * Starting at the top left, you are only allowed to move down & right.
 * Count the number of ways to arrive at the bottom left
 */

function gridTraveller(m: number, n: number) {
  const memo = {};

  const compute = (row: number, col: number) => {
    const key = `${row}-${col}`;
    if (key in memo) return memo[key];
    if (`${col}-${row}` in memo) return memo[`${col}-${row}`];

    if (row === 0 || col === 0) return 0;
    if (row === 1 && col === 1) return 1;

    const result = compute(row - 1, col) + compute(row, col - 1);

    memo[key] = result;
    return result;
  };

  return compute(m, n);
}

const result = gridTraveller(2000, 200);
console.log(result);
