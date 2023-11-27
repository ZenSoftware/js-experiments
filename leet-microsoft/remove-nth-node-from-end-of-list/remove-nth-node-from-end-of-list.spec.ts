import { removeNthFromEnd, ListNode, toList, toArray } from './remove-nth-node-from-end-of-list';

describe('Remove Nth Node From End of List', () => {
  it('evaluates correcty', () => {
    const result1 = removeNthFromEnd(toList([1, 2, 3]), 1);
    expect(toArray(result1)).toEqual([1, 2]);

    const result2 = removeNthFromEnd(toList([1, 2, 3]), 2);
    expect(toArray(result2)).toEqual([1, 3]);

    const result3 = removeNthFromEnd(toList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 7);
    expect(toArray(result3)).toEqual([1, 2, 3, 5, 6, 7, 8, 9, 10]);
  });
});
