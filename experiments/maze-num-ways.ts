/**
 * https://youtu.be/Hdr64lKQ3e4?si=QGq88Tobx2QYLZTM&t=922
 * Given an m x n grid, in how many ways can a rabbit get from
 * the top left to the bottom right if it can only move down and right?
 */
function mazeNumWays(rows: number, cols: number) {
  const cache: Record<string, number> = {};

  function ways(r: number, c: number) {
    let key = '';
    if (r <= c) key = `${r}x${c}`;
    else key = `${c}x${r}`;

    if (cache[key] !== undefined) return cache[key];

    if (r === 1 || c === 1) return 1;

    let result = 0;
    result += ways(r - 1, c);
    result += ways(r, c - 1);

    cache[key] = result;
    return result;
  }

  return ways(rows, cols);
}

console.log(mazeNumWays(10, 100));
