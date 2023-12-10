/**
 * https://leetcode.com/problems/partition-list/description/
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 * The number of nodes in the list is in the range [0, 200].
 * -100 <= Node.val <= 100
 * -200 <= x <= 200
 */
export function partition(head: ListNode | null, x: number): ListNode | null {
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
