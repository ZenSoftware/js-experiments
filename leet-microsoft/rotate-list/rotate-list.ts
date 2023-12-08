/**
 * https://leetcode.com/problems/rotate-list/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given the head of a linked list, rotate the list to the right by k places.
 * The number of nodes in the list is in the range [0, 500].
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return null;
  else if (head.next === null) return head;

  for (let i = 0; i < k; i++) {
    head = rotateOnce(head);
  }

  return head;
}

export function rotateOnce(head: ListNode): ListNode {
  let trail: ListNode | null = head;
  let pointer: ListNode | null = head!.next;

  while (pointer!.next !== null) {
    trail = trail!.next;
    pointer = pointer!.next;
  }

  pointer!.next = head;
  trail!.next = null;
  head = pointer as ListNode;

  return head;
}

export function toList(elements: number[]) {
  if (elements.length === 0) return null;
  let pointer = new ListNode(elements[elements.length - 1]);
  for (let i = elements.length - 2; i >= 0; i--) {
    const node = new ListNode(elements[i]);
    node.next = pointer;
    pointer = node;
  }
  return pointer;
}

export function toArray(list: ListNode | null) {
  if (list === null) return [];
  const result: number[] = [];
  let pointer: ListNode | null = list;
  while (pointer !== null) {
    result.push(pointer.val);
    pointer = pointer.next;
  }
  return result;
}
