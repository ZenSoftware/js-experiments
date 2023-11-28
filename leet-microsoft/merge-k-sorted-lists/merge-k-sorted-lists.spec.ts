import { mergeKLists, listToArray, arrayToList } from './merge-k-sorted-lists';

describe('Merge k Sorted Lists', () => {
  it('evaluates correcty 1', () => {
    const input = [arrayToList([1, 4, 5]), arrayToList([1, 3, 4]), arrayToList([2, 6])];
    const output = mergeKLists(input);
    expect(listToArray(output)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });

  it('evaluates correcty 2', () => {
    const input = [];
    const output = mergeKLists(input);
    expect(listToArray(output)).toEqual([]);
  });

  it('evaluates correcty 3', () => {
    const input: any = [[]];
    const output = mergeKLists(input);
    expect(listToArray(output)).toEqual([]);
  });
});
