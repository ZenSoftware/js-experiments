import { generateParenthesis } from './generate-parentheses';

describe('Generate Parentheses', () => {
  it('evaluates correctly', () => {
    expect(generateParenthesis(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
    expect(generateParenthesis(1)).toEqual(['()']);
  });
});
