import exp from 'constants';
import { mergeKLists, ListNode, getVals } from './merge-k-lists';

describe('mergeKLists', () => {
  it('merges lists in asc order', () => {
    const a1 = new ListNode(1);
    const a2 = new ListNode(3);
    const a3 = new ListNode(5);
    a1.next = a2;
    a2.next = a3;

    const b1 = new ListNode(2);
    const b2 = new ListNode(4);
    const b3 = new ListNode(6);
    b1.next = b2;
    b2.next = b3;

    const result = mergeKLists([a1, b1]);
    expect(getVals(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
