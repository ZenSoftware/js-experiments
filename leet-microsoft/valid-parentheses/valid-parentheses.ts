/**
 * https://leetcode.com/problems/valid-parentheses/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.\Every close bracket has a corresponding open bracket of the same type.
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 */
export function isValid(s: string): boolean {
  const memo: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === '(' || char === '[' || char === '{') {
      memo.push(char);
    } else if (char === ')') {
      if (memo.pop() !== '(') return false;
    } else if (char === ']') {
      if (memo.pop() !== '[') return false;
    } else if (char === '}') {
      if (memo.pop() !== '{') return false;
    }
  }
  return memo.length === 0;
}
