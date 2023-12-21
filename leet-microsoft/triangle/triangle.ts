/**
 * https://leetcode.com/problems/triangle/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a triangle array, return the minimum path sum from top to bottom.
 * For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
 * 1 <= triangle.length <= 200
 * triangle[0].length == 1
 * triangle[i].length == triangle[i - 1].length + 1
 * -104 <= triangle[i][j] <= 104
 */
export function minimumTotal(triangle: number[][]): number {
  const result: number[][] = Array(triangle.length);

  for (let i = 0; i < result.length; i++) {
    result[i] = Array(i + 1);
  }

  result[result.length - 1] = triangle[triangle.length - 1];

  for (let i = triangle.length - 2; i >= 0; i--) {
    const row = result[i];
    for (let j = 0; j < row.length; j++) {
      row[j] = triangle[i][j] + Math.min(result[i + 1][j], result[i + 1][j + 1]);
    }
  }

  return result[0][0];
}
