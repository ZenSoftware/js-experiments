import { isPalindrome } from './valid-palindrome';

describe('Valid Palindrome', () => {
  it('evaluates correctly', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
    expect(isPalindrome('race a car')).toEqual(false);
    expect(isPalindrome(' ')).toEqual(true);
  });
});
