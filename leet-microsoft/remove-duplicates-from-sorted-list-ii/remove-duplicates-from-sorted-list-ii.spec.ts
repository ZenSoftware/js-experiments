import { deleteDuplicates, toArray, toList } from './remove-duplicates-from-sorted-list-ii';

describe('Remove Duplicates from Sorted List II', () => {
  it('evaluates correctly 1', () => {
    const input = toList([1, 2, 3, 3, 4, 4, 5]);
    const result = deleteDuplicates(input);
    expect(toArray(result)).toEqual([1, 2, 5]);
  });

  it('evaluates correctly 2', () => {
    const input = toList([1, 1, 1, 2, 3]);
    const result = deleteDuplicates(input);
    expect(toArray(result)).toEqual([2, 3]);
  });
});
