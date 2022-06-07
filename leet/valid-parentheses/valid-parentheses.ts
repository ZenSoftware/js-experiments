/**
 * https://leetcode.com/problems/valid-parentheses/
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 */
function isValid(s: string): boolean {
  const paren: number[] = [];
  const square: number[] = [];
  const curly: number[] = [];

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    switch (char) {
      case '(':
        paren.push(count);
        count++;
        break;
      case '[':
        square.push(count);
        count++;
        break;
      case '{':
        curly.push(count);
        count++;
        break;
    }

    switch (char) {
      case ')':
        console.log(paren);
        console.log(square);
        console.log(curly);
        const pCount = paren.pop();
        console.log(pCount);

        break;
      case ']':
        console.log(paren);
        console.log(square);
        console.log(curly);
        const sCount = square.pop();
        console.log(sCount);
        break;
      case '}':
        console.log(paren);
        console.log(square);
        console.log(curly);
        const cCount = curly.pop();
        console.log(cCount);
        break;
    }
  }

  if (paren.length > 0 || square.length > 0 || curly.length > 0) {
    return false;
  }

  console.log(paren);
  console.log(square);
  console.log(curly);
  return true;
}

// console.log(isValid('()[]{}'));
console.log(isValid('{[()]}'));
