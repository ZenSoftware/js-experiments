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

export function reorderList(head: ListNode | null): void {
  let pointer = head;
  const list: ListNode[] = [];
  while (pointer) {
    list.push(pointer);
    pointer = pointer.next;
  }
  const reordered = swap(list);

  for (let i = 0; i < list.length - 1; i++) {
    reordered[i].next = reordered[i + 1];
  }
  reordered[reordered.length - 1].next = null;
}

export function swap<T>(list: T[]) {
  const reordered: T[] = Array(list.length);

  let j = 0;
  for (let i = 0; i < list.length; i += 2) {
    reordered[i] = list[j];
    j++;
  }

  j = list.length - 1;
  for (let i = 1; i < list.length; i += 2) {
    reordered[i] = list[j];
    j--;
  }

  return reordered;
}

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
