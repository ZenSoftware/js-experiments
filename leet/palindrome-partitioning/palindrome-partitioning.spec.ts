import { partition } from './palindrome-partitioning';

describe('palindrome-partitioning', () => {
  it('works', () => {
    expect(partition('bacab')).toEqual([['b', 'a', 'c', 'a', 'b'], ['b', 'aca', 'b'], ['bacab']]);
  });
});
