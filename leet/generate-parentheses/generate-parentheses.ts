/**
 * https://leetcode.com/problems/generate-parentheses/
 * Given n pairs of parentheses, write a function to generate
 * all combinations of well-formed parentheses.
 */

export function generateParenthesis(n: number): string[] {
  const combinations: string[] = [];

  let current: string[] = [];
  for (let i = 1; i <= 2 * n; i++) {
    current.push('');
  }

  generateAll(current, 0, combinations);

  return combinations;
}

function generateAll(current: string[], pos: number, result: string[]) {
  if (pos === current.length) {
    if (valid(current)) result.push(current.join(''));
    return;
  }

  current[pos] = '(';
  generateAll(current, pos + 1, result);
  current[pos] = ')';
  generateAll(current, pos + 1, result);
}

function valid(current: string[]) {
  let balance = 0;

  for (let c of current) {
    if (c == '(') balance++;
    else balance--;
    if (balance < 0) return false;
  }

  return balance === 0;
}

console.log(generateParenthesis(3));
