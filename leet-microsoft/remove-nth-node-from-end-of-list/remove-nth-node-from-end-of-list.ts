/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return null;

  let trailingPointer: any = head;
  let lastPointer: any = head;

  for (let i = 1; i <= n; i++) {
    if (lastPointer.next === null) {
      return head.next;
    }
    lastPointer = lastPointer.next;
  }

  while (lastPointer.next !== null) {
    trailingPointer = trailingPointer.next;
    lastPointer = lastPointer.next;
  }

  trailingPointer.next = trailingPointer.next.next;

  return head;
}

export function toList(vals: number[]) {
  if (vals.length === 0) return null;
  else if (vals.length === 1) return new ListNode(vals[0]);

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

  const result: number[] = [];
  let pointer: any = head;

  do {
    result.push(pointer.val);
    pointer = pointer.next;
  } while (pointer !== null);

  return result;
}
