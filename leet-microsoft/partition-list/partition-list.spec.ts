import { partition, toArray, toList } from './partition-list';

describe('Partition List', () => {
  it('evaluates correctly 1', () => {
    const input = toList([1, 4, 3, 2, 5, 2]);
    const result = partition(input, 3);
    expect(toArray(result)).toEqual([1, 2, 2, 4, 3, 5]);
  });

  it('evaluates correctly 2', () => {
    const input = toList([2, 1]);
    const result = partition(input, 2);
    expect(toArray(result)).toEqual([1, 2]);
  });
});
