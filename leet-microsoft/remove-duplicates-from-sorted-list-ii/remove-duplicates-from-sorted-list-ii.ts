/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 */

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  return null;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function toList(vals: number[]) {
  if (vals.length === 0) return null;
  let pointer = new ListNode(vals[vals.length - 1]);
  for (let i = vals.length - 2; i >= 0; i--) {
    const node = new ListNode(vals[i]);
    node.next = pointer;
    pointer = node;
  }
  return pointer;
}

export function toArray(head: ListNode | null) {
  if (head === null) return [];
  let result: number[] = [];
  let pointer: ListNode | null = head;
  while (pointer !== null) {
    result.push(pointer.val);
    pointer = pointer.next;
  }
  return result;
}
