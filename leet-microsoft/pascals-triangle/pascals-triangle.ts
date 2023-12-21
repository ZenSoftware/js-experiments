/**
 * https://leetcode.com/problems/pascals-triangle/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * 1 <= numRows <= 30
 */

export function generate(numRows: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = Array(i + 1);
    row[0] = 1;
    row[i] = 1;
    result.push(row);
  }

  for (let i = 1; i < numRows - 1; i++) {
    const above = result[i];
    const below = result[i + 1];

    for (let j = 0; j < above.length - 1; j++) {
      below[j + 1] = above[j] + above[j + 1];
    }
  }

  return result;
}
