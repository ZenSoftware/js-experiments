/**
 * https://leetcode.com/problems/text-justification/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 */

export function fullJustify(words: string[], maxWidth: number): string[] {
  let w = 0;
  let lines: string[][] = [];
  let result: string[] = [];

  while (w < words.length) {
    const line: string[] = [];
    lines.push(line);
    while (w < words.length) {
      const wordCharCount = countWordChars(line);
      if (wordCharCount + line.length + words[w].length <= maxWidth) {
        line.push(words[w]);
      } else {
        break;
      }
      w++;
    }
  }

  for (let l = 0; l < lines.length - 1; l++) {
    const line = lines[l];
    const totalSpaceLength = maxWidth - countWordChars(line);
    const numSpaces = line.length - 1;
    if (line.length > 1) {
      let avgSpaceLength = Math.floor(totalSpaceLength / numSpaces);
      let joinBy = '';
      for (let i = 0; i < avgSpaceLength; i++) {
        joinBy += ' ';
      }
      for (let i = 0; i < line.length - 1; i++) {
        line[i] = line[i] + joinBy;
      }

      let w2 = 0;
      let spaceRemainder = totalSpaceLength - avgSpaceLength * numSpaces;
      while (spaceRemainder > 0) {
        line[w2] += ' ';
        w2++;
        spaceRemainder--;
      }
    } else {
      const singleWorldLength = line[0].length;
      for (let i = 0; i < maxWidth - singleWorldLength; i++) {
        line[0] = line[0] + ' ';
      }
    }

    result.push(line.join(''));
  }

  let lastLine = lines[lines.length - 1].join(' ');
  const lastLineLength = lastLine.length;
  for (let i = 0; i < maxWidth - lastLineLength; i++) {
    lastLine += ' ';
  }
  result.push(lastLine);

  return result;
}

function countWordChars(line: string[]) {
  return line.reduce((acc, cur) => (acc += cur.length), 0);
}
