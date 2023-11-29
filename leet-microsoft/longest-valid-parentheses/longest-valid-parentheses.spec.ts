import { longestValidParentheses } from './longest-valid-parentheses';

describe('Longest Valid Parentheses', () => {
  it('evaluates correcty', () => {
    expect(longestValidParentheses('(()')).toEqual(2);
    expect(longestValidParentheses(')()())')).toEqual(4);
    expect(longestValidParentheses('')).toEqual(0);
  });
});
