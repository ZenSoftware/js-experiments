/**
 * https://leetcode.com/problems/spiral-matrix-ii/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 * 1 <= n <= 20
 */
export function generateMatrix(n: number): number[][] {
  const result: number[][] = new Array(n);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(n);
    result[i] = new Array(n);
  }

  const total = n * n;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  let count = 1;

  while (count <= total) {
    for (let col = left; col <= right; col++) {
      result[top][col] = count;
      count++;
      if (count > total) break;
    }
    top++;

    for (let row = top; row <= bottom; row++) {
      result[row][right] = count;
      count++;
      if (count > total) break;
    }
    right--;

    for (let col = right; col >= left; col--) {
      result[bottom][col] = count;
      count++;
      if (count > total) break;
    }
    bottom--;

    for (let row = bottom; row >= top; row--) {
      result[row][left] = count;
      count++;
      if (count > total) break;
    }
    left++;
  }

  return result;
}

// console.log(generateMatrix(3));
