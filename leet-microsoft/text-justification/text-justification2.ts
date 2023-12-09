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
      if (wordCharCount + line.length + words[w].length < maxWidth) {
        line.push(words[w]);
      } else {
        break;
      }
      w++;
    }
  }

  for (let line of lines) {
    const totalSpaceCount = maxWidth - countWordChars(line);
    let spacesBetween = Math.floor(totalSpaceCount / (line.length - 1));
    spacesBetween ||= 1;
    let spacesBetweenRemainder = totalSpaceCount % (line.length - 1);
    spacesBetweenRemainder ||= 0;
    let joinBy = '';
    for (let i = 0; i < spacesBetween; i++) {
      joinBy += ' ';
    }
    for (let i = 0; i < line.length - 1; i++) {
      line[i] = line[i] + joinBy;
    }
    let w2 = 0;
    while (spacesBetweenRemainder > 0) {
      line[w2] += ' ';
      w2++;
      spacesBetweenRemainder--;
    }
    result.push(line.join(''));
  }

  return result;
}

function countWordChars(line: string[]) {
  return line.reduce((acc, cur) => (acc += cur.length), 0);
}

// fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16);
