import { partition } from './palindrome-partitioning';

describe('Palindrome Partitioning', () => {
  it('evaluates correctly', () => {
    expect(partition('aab')).toEqual([
      ['a', 'a', 'b'],
      ['aa', 'b'],
    ]);

    expect(partition('a')).toEqual([['a']]);
  });
});
