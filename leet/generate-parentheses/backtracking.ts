/**
 * https://leetcode.com/problems/generate-parentheses/
 * Given n pairs of parentheses, write a function to generate
 * all combinations of well-formed parentheses.
 */

export function generateParenthesis(max: number): string[] {
  const result: string[] = [];
  const maxLength = max * 2;

  const backtrack = (current: string[], open: number, close: number) => {
    if (current.length >= maxLength) {
      result.push(current.join(''));
    }

    if (open < max) {
      current.push('(');
      backtrack(current, open + 1, close);
      current.pop();
    }

    if (close < open) {
      current.push(')');
      backtrack(current, open, close + 1);
      current.pop();
    }
  };

  backtrack([], 0, 0);
  return result;
}

console.log(generateParenthesis(3));
