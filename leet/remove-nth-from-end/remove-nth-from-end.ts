/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Given the head of a linked list, remove the nth node from the end
 * of the list and return its head.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {}
