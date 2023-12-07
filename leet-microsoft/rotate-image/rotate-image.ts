/**
 * https://leetcode.com/problems/rotate-image/description/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 */
export function rotate(matrix: number[][]): void {
  transpose(matrix);
  reverseRows(matrix);
}

export function transpose(matrix: number[][]): void {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r + 1; c < matrix[r].length; c++) {
      let temp = matrix[c][r];
      matrix[c][r] = matrix[r][c];
      matrix[r][c] = temp;
    }
  }
}

export function reverseRows(matrix: number[][]): void {
  for (let row of matrix) {
    row.reverse();
  }
}
