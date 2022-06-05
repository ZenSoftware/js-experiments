import { partition, isPalindrome } from './palindrome-partitioning';

describe('palindrome-partitioning', () => {
  it('partition', () => {
    expect(partition('bacab')).toEqual([['b', 'a', 'c', 'a', 'b'], ['b', 'aca', 'b'], ['bacab']]);
  });

  it('isPalindrome', () => {
    expect(isPalindrome('')).toEqual(true);
    expect(isPalindrome('a')).toEqual(true);
    expect(isPalindrome('ab')).toEqual(false);
    expect(isPalindrome('aba')).toEqual(true);
  });
});
