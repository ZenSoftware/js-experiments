/**
 * https://leetcode.com/problems/generate-parentheses/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 1 <= n <= 8
 */
export function generateParenthesis(n: number): string[] {
  const ans = [];
  backtrack(ans, '', 0, 0, n);
  return ans;
}

function backtrack(ans: string[], cur: string, open: number, close: number, max: number) {
  if (close === max) {
    ans.push(cur);
    return;
  }

  if (open < max) backtrack(ans, cur + '(', open + 1, close, max);

  if (close < open) backtrack(ans, cur + ')', open, close + 1, max);
}
