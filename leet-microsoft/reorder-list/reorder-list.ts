/**
 * https://leetcode.com/problems/reorder-list/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given the head of a singly linked-list. The list can be represented as:
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 * The number of nodes in the list is in the range [1, 5 * 10^4].
 * 1 <= Node.val <= 1000
 */

export function reorderList(head: ListNode | null): void {}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function toList(values: number[]): ListNode | null {
  if (values.length === 0) return null;
  let pointer = new ListNode(values[values.length - 1]);

  for (let i = values.length - 2; i >= 0; i--) {
    const node = new ListNode(values[i]);
    node.next = pointer;
    pointer = node;
  }
  return pointer;
}

export function toArray(root: ListNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  let pointer: ListNode | null = root;
  while (pointer) {
    result.push(pointer.val);
    pointer = pointer.next;
  }

  return result;
}

// const sampleList = toList([1, 2, 3, 4]);
// console.log(sampleList);
// console.log(toArray(sampleList));
