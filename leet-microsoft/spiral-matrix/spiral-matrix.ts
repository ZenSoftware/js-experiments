/**
 * https://leetcode.com/problems/spiral-matrix/
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 */
export function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const size = numRows * numCols;

  let top = 0;
  let bottom = numRows - 1;
  let left = 0;
  let right = numCols - 1;

  function isDone() {
    return result.length === size;
  }

  while (true) {
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
      if (isDone()) return result;
    }
    top++;

    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
      if (isDone()) return result;
    }
    right--;

    for (let col = right; col >= left; col--) {
      result.push(matrix[bottom][col]);
      if (isDone()) return result;
    }
    bottom--;

    for (let row = bottom; row >= top; row--) {
      result.push(matrix[row][left]);
      if (isDone()) return result;
    }
    left++;
  }
}
