/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 * The number of nodes in the list is in the range [0, 100].
 * 0 <= Node.val <= 100
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function swapPairs(head: ListNode | null): ListNode | null {
  return null;
}
