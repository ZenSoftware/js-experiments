import { hasCycle, ListNode } from './linked-list-cycle';

describe('Linked List Cycle', () => {
  it('evaluates correctly 1', () => {
    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);
    const n4 = new ListNode(4);

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n2;

    expect(hasCycle(n1)).toEqual(true);
  });

  it('evaluates correctly 1', () => {
    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);
    const n4 = new ListNode(4);

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;

    expect(hasCycle(n1)).toEqual(false);
  });
});
