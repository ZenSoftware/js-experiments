function generateParenthesis(n: number): string[] {
  let ans: string[] = [];
  backtrack(ans, [], 0, 0, n);
  return ans;
}

function backtrack(ans: string[], cur: string[], open: number, close: number, max: number) {
  if (cur.length === max * 2) {
    ans.push(cur.join(''));
    return;
  }

  if (open < max) {
    cur.push('(');
    backtrack(ans, cur, open + 1, close, max);
    cur.pop();
  }

  if (close < open) {
    cur.push(')');
    backtrack(ans, cur, open, close + 1, max);
    cur.pop();
  }
}

console.log(generateParenthesis(3));
