/**
 * https://leetcode.com/problems/set-matrix-zeroes/
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -231 <= matrix[i][j] <= 231 - 1
 */
export function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        for (let i = 0; i < rows; i++) {
          if (matrix[i][c] !== 0) matrix[i][c] = null as any;
        }
        for (let i = 0; i < cols; i++) {
          if (matrix[r][i] !== 0) matrix[r][i] = null as any;
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === null) {
        matrix[r][c] = 0;
      }
    }
  }
}
