/**
 * https://leetcode.com/problems/longest-valid-parentheses/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.
 * 0 <= s.length <= 3 * 104
 * s[i] is '(', or ')'.
 */
export function longestValidParentheses(s: string): number {
  let longest = 0;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const str = s.substring(i, j + 1);
      if (isValid(str) && str.length > longest) longest = str.length;
    }
  }
  return longest;
}

export function isValid(s: string) {
  const memo: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') memo.push('(');
    else {
      const current = memo.pop();
      if (current !== '(') return false;
    }
  }
  return memo.length === 0;
}

console.log(isValid('((()))'));
