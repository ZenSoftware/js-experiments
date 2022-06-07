/**
 * https://leetcode.com/problems/valid-parentheses/
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 */
function isValid(s: string): boolean {
  const brackets: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (char === '(' || char === '[' || char === '{') {
      brackets.push(char);
    }

    switch (char) {
      case ')':
        if (brackets.pop() !== '(') return false;
        break;
      case ']':
        if (brackets.pop() !== '[') return false;
        break;
      case '}':
        if (brackets.pop() !== '{') return false;
        break;
    }
  }

  if (brackets.length > 0) return false;

  return true;
}

// console.log(isValid('()[]{}'));
console.log(isValid('{([{}])}'));
