/**
 * https://leetcode.com/problems/zigzag-conversion/
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 * `string convert(string s, int numRows);`
 *
 * 1 <= s.length <= 1000
 * s consists of English letters (lower-case and upper-case), ',' and '.'.
 * 1 <= numRows <= 1000
 */

export function convert(s: string, numRows: number): string {
  const layout: string[][] = new Array(numRows);
  for (let i = 0; i < layout.length; i++) {
    layout[i] = [];
  }

  const letters = s.split('');

  let col = 0;
  while (letters.length) {
    for (let row = 0; row < numRows; row++) {
      const current = letters.shift();
      if (current === undefined) break;
      layout[row][col] = current;
    }

    for (let row = numRows - 2; row > 0; row--) {
      const current = letters.shift();
      if (current === undefined) break;
      col++;
      layout[row][col] = current;
    }
    col++;
  }

  let result = '';
  for (let row = 0; row < layout.length; row++) {
    for (let col = 0; col < layout[row].length; col++) {
      const current = layout[row][col];
      if (current !== undefined) result += current;
    }
  }

  return result;
}
