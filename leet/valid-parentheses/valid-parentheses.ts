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

  let order = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    switch (char) {
      case '(':
        paren.push(order);
        order++;
        break;
      case '[':
        square.push(order);
        order++;
        break;
      case '{':
        curly.push(order);
        order++;
        break;
    }

    switch (char) {
      case ')':
        const pCount = paren.pop();
        console.log(pCount);
        if (pCount === undefined) {
          return false;
        }
        break;
      case ']':
        const sCount = square.pop();
        console.log(sCount);
        if (sCount === undefined) {
          return false;
        }
        break;
      case '}':
        const cCount = curly.pop();
        console.log(cCount);
        if (cCount === undefined) {
          return false;
        }
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
console.log(isValid('{(([]))}'));
