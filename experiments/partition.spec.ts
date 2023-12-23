import { partition } from './partition';

describe('Partition', () => {
  it('evaluates correctly', () => {
    expect(partition('abc')).toEqual([['a', 'b', 'c'], ['a', 'bc'], ['ab', 'c'], ['abc']]);
  });
});
