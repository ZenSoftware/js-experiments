/**
 * https://leetcode.com/problems/surrounded-regions/
 * Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 200
 * board[i][j] is 'X' or 'O'.
 */

export function solve(board: string[][]): void {
  const flips: Flip[] = [];
  const dontFlips = allFixedOs(board);

  for (let r = 1; r < board.length - 1; r++) {
    const row = board[r];
    for (let c = 1; c < row.length - 1; c++) {
      if (row[c] === 'O' && !dontFlips.get(`${r},${c}`) && isSurrounded(board, r, c)) {
        flips.push({ r, c });
      }
    }
  }

  for (let flip of flips) {
    board[flip.r][flip.c] = 'X';
  }
}

interface Flip {
  r: number;
  c: number;
}

function allFixedOs(board: string[][]) {
  const fixed = new Map<string, Flip>();
  const rowLength = board.length;
  const colLength = board[0].length;

  function dfs(r: number, c: number) {
    if (!(1 <= r && r <= rowLength - 2 && 1 <= c && c <= colLength - 2)) {
      return;
    }

    if (board[r][c] === 'X') return;

    const key = `${r},${c}`;
    if (fixed.get(key) === undefined) {
      fixed.set(key, { r, c });
    } else {
      return;
    }

    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  for (let c = 1; c < colLength - 1; c++) {
    if (board[0][c] === 'O') dfs(1, c);
    if (board[rowLength - 1][c] === 'O') dfs(rowLength - 2, c);
  }

  for (let r = 1; r < rowLength - 1; r++) {
    if (board[r][0] === 'O') dfs(r, 1);
    if (board[r][colLength - 1] === 'O') dfs(r, colLength - 2);
  }

  return fixed;
}

function isSurrounded(board: string[][], r: number, c: number): boolean {
  return (
    hasLeftX(board, r, c) &&
    hasRightX(board, r, c) &&
    hasTopX(board, r, c) &&
    hasBottomX(board, r, c)
  );
}

function hasLeftX(board: string[][], r: number, c: number): boolean {
  do {
    c--;
    if (board[r][c] === 'X') return true;
  } while (c > 0);

  return false;
}

function hasRightX(board: string[][], r: number, c: number): boolean {
  do {
    c++;
    if (board[r][c] === 'X') return true;
  } while (c < board[r].length - 1);

  return false;
}

function hasTopX(board: string[][], r: number, c: number): boolean {
  do {
    r--;
    if (board[r][c] === 'X') return true;
  } while (r > 0);

  return false;
}

function hasBottomX(board: string[][], r: number, c: number): boolean {
  do {
    r++;
    if (board[r][c] === 'X') return true;
  } while (r < board.length - 1);

  return false;
}
