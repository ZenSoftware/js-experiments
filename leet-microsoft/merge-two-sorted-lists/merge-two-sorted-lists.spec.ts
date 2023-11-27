import { mergeTwoLists, toArray, toList } from './merge-two-sorted-lists';

describe('Merge Two Sorted Lists', () => {
  it('evaluates correcty 1', () => {
    const list1 = toList([1, 2, 4]);
    const list2 = toList([1, 3, 4]);
    const result = mergeTwoLists(list1, list2);
    expect(toArray(result)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it('evaluates correcty 2', () => {
    const list1 = toList([]);
    const list2 = toList([]);
    const result = mergeTwoLists(list1, list2);
    expect(toArray(result)).toEqual([]);
  });

  it('evaluates correcty 3', () => {
    const list1 = toList([]);
    const list2 = toList([0]);
    const result = mergeTwoLists(list1, list2);
    expect(toArray(result)).toEqual([0]);
  });

  it('evaluates correcty 4', () => {
    const list1 = toList([5]);
    const list2 = toList([1, 2, 4]);
    const result = mergeTwoLists(list1, list2);
    expect(toArray(result)).toEqual([1, 2, 4, 5]);
  });

  it('evaluates correcty 5', () => {
    const list1 = toList([2]);
    const list2 = toList([1]);
    const result = mergeTwoLists(list1, list2);
    expect(toArray(result)).toEqual([1, 2]);
  });
});
