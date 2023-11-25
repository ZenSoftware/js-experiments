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

  console.log(layout);

  let result = '';
  for (let row = 0; row < layout.length; row++) {
    for (let col = 0; col < layout[row].length; col++) {
      const current = layout[row][col];
      if (current !== undefined) result += current;
    }
  }

  return result;
}
