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
  let result = triangle[0][0];

  let pointer = 0;
  for (let i = 1; i < triangle.length; i++) {
    const first = triangle[i][pointer];
    const second = triangle[i][pointer + 1];
    if (first <= second) {
      result += first;
    } else {
      result += second;
      pointer++;
    }
  }

  return result;
}
