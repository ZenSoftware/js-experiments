/**
 * https://leetcode.com/problems/linked-list-cycle-ii/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
 * Do not modify the linked list.
 * The number of the nodes in the list is in the range [0, 104].
 * -105 <= Node.val <= 105
 * pos is -1 or a valid index in the linked-list.
 */

export function detectCycle(head: ListNode | null): ListNode | null {
  let pointer = head;
  const record = new Map<ListNode, true>();

  while (pointer) {
    if (record.get(pointer)) return pointer;
    else record.set(pointer, true);
    pointer = pointer.next;
  }

  return null;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
