/**
 * https://leetcode.com/problems/word-search/
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 */
export function exist(board: string[][], word: string): boolean {
  const maxRow = board.length - 1;
  const maxCol = board[0].length - 1;

  function dfs(findWord: string, row: number, col: number, visited: Record<string, true>) {
    if (findWord.length === 0) return true;
    if (row < 0 || col < 0) return false;
    if (row > maxRow || col > maxCol) return false;
    const currentKey = key(row, col);
    if (visited[currentKey]) return false;
    if (findWord[0] !== board[row][col]) return false;

    const nextWord = findWord.substring(1);
    const nextVisited = { ...visited };
    nextVisited[currentKey] = true;

    const downResult = dfs(nextWord, row + 1, col, nextVisited);
    if (downResult) return true;

    const upResult = dfs(nextWord, row - 1, col, nextVisited);
    if (upResult) return true;

    const rightResult = dfs(nextWord, row, col + 1, nextVisited);
    if (rightResult) return true;

    const leftResult = dfs(nextWord, row, col - 1, nextVisited);
    if (leftResult) return true;

    return false;
  }

  for (let r = 0; r <= maxRow; r++) {
    for (let c = 0; c <= maxCol; c++) {
      if (dfs(word, r, c, {})) return true;
    }
  }

  return false;
}

const key = (row: number, col: number) => `${row},${col}`;
