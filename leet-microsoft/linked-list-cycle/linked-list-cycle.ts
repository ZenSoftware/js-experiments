/**
 * https://leetcode.com/problems/linked-list-cycle/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * The number of the nodes in the list is in the range [0, 104].
 * -10^5 <= Node.val <= 10^5
 * pos is -1 or a valid index in the linked-list.
 */

export function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  let toggle = false;
  while (fast) {
    if (toggle) slow = slow!.next;
    toggle = !toggle;
    fast = fast.next;
    if (fast === slow) return true;
  }

  return false;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
