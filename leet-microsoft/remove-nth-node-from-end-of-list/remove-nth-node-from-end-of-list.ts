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
  return null;
}

function toList(vals: number[]) {
  let pointer = new ListNode(vals[vals.length - 1]);

  for (let i = vals.length - 2; i >= 0; i--) {
    const node = new ListNode(vals[i]);
    node.next = pointer;
    pointer = node;
  }

  return pointer;
}

function printList(head: ListNode | null) {
  if (head === null) return [];

  const result: number[] = [];
  let pointer: any = head;

  do {
    result.push(pointer.val);
    pointer = pointer.next;
  } while (pointer !== null);

  return result;
}

console.log(printList(toList([1, 2, 3, 4, 5])));
