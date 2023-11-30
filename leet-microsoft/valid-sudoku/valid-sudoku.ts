/**
 * https://leetcode.com/problems/valid-sudoku/
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit 1-9 or '.'
 */
export function isValidSudoku(board: string[][]): boolean {
  let rowMemo: Record<string, true> = {};
  let colMemo: Record<string, true> = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const rowVal = board[i][j];
      if (rowVal !== '.') {
        if (rowMemo[rowVal]) return false;
        else rowMemo[rowVal] = true;
      }

      const colVal = board[j][i];
      if (colVal !== '.') {
        if (colMemo[colVal]) return false;
        else colMemo[colVal] = true;
      }
    }

    rowMemo = {};
    colMemo = {};
  }

  for (let i = 0; i <= 6; i += 3) {
    for (let j = 0; j <= 6; j += 3) {
      if (!validateGrid(board, i, j)) return false;
    }
  }

  return true;
}

function validateGrid(board: string[][], rowIndex: number, colIndex: number) {
  let rowMemo: Record<string, true> = {};
  let colMemo: Record<string, true> = {};

  for (let i = rowIndex; i < rowIndex + 3; i++) {
    for (let j = colIndex; j < colIndex + 3; j++) {
      const rowVal = board[i][j];
      if (rowVal !== '.') {
        if (rowMemo[rowVal]) return false;
        else rowMemo[rowVal] = true;
      }

      const colVal = board[j][i];
      if (colVal !== '.') {
        if (colMemo[colVal]) return false;
        else colMemo[colVal] = true;
      }
    }
  }
  return true;
}
