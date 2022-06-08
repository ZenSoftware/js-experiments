import { generateParenthesis } from './generate-parentheses';

it('generates', () => {
  expect(generateParenthesis(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
});
