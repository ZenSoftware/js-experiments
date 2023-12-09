/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * You are given an m x n integer matrix matrix with the following two properties:
 * Each row is sorted in non-decreasing order.
 * The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * -104 <= matrix[i][j], target <= 104
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  function binarySearchCols(nums: number[], start: number, end: number) {
    if (start > end) return false;
    const mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) return true;
    if (target < nums[mid]) return binarySearchCols(nums, start, mid - 1);
    else return binarySearchCols(nums, mid + 1, end);
  }

  let rowIndex = matrix.length - 1;
  for (let i = 0; i < matrix.length - 1; i++) {
    if (target >= matrix[i][0] && target < matrix[i + 1][0]) {
      rowIndex = i;
      break;
    }
  }

  return binarySearchCols(matrix[rowIndex], 0, matrix[rowIndex].length - 1);
}
