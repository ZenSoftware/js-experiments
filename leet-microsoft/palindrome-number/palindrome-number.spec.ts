import { isPalindrome } from './palindrome-number';

describe('Palindrome Number', () => {
  it('evaluates correcty', () => {
    expect(isPalindrome(121)).toEqual(true);
    expect(isPalindrome(-121)).toEqual(false);
    expect(isPalindrome(10)).toEqual(false);
  });
});
