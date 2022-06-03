/**
 * You are given a grid of m rows & n columns.
 * Starting at the top left, you are only allowed to move down & right.
 * Count the number of ways to arrive at the bottom left
 */

export function gridTraveller(m: number, n: number) {
  const memo: { [key: string]: any } = {};

  const compute = (_m: number, _n: number) => {
    const key = `${_m}-${_n}`;
    let cache = memo[key];
    if (cache === undefined) cache = memo[`${_n}-${_m}`];
    if (cache !== undefined) return cache;

    if (_m === 0 || _n === 0) return 0;
    if (_m === 1 && _n === 1) return 1;

    const result = compute(_m - 1, _n) + compute(_m, _n - 1);
    memo[key] = result;
    return result;
  };

  return compute(m, n);
}

const result = gridTraveller(2000, 200);
console.log(result);
