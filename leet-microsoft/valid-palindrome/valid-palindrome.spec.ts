import { isPalindrome } from './valid-palindrome';

describe('Valid Palindrome', () => {
  it('evaluates correctly', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
  });
});
