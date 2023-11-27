import { isValid } from './valid-parentheses';

describe('Valid Parentheses', () => {
  it('evaluates correctly', () => {
    expect(isValid('()')).toEqual(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('(]')).toEqual(false);
    expect(isValid('[')).toEqual(false);
  });
});
