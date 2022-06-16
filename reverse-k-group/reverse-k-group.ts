/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 * Given the head of a linked list, reverse the nodes of the list k at a time,
 * and return the modified list.
 *
 * k is a positive integer and is less than or equal to the length of the linked list.
 * If the number of nodes is not a multiple of k then left-out nodes, in the end,
 * should remain as it is.
 *
 * You may not alter the values in the list's nodes, only nodes themselves may be changed.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return head;

  let result;
  let count = 1;
  let start = head;

  for (let i = 1; i <= k; i++) {
    if (i === k) {
      const rest = head.next;
      head.next = null;
      const { newStart, newEnd } = reverse(start);
      result = newStart;
      newEnd.next = rest;
      head = newEnd;
      start = newEnd;
    }
    head = head.next;
  }

  while (head !== null) {
    if (count % k === 0) {
      const rest = head.next;
      head.next = null;
      const { newStart, newEnd } = reverse(start.next);
      newEnd.next = rest;
      head = newEnd;
      start.next = newStart;
      start = newEnd;
    }

    head = head.next;
    count++;
  }

  return result;
}

function reverse(head: ListNode | null): { newStart: any; newEnd: any } {
  if (head === null) return { newStart: null, newEnd: null };
  if (head.next === null) return { newStart: head, newEnd: head };

  const listAsArray: ListNode[] = [];

  while (head !== null) {
    listAsArray.push(head);
    head = head.next;
  }

  for (let i = listAsArray.length - 1; i >= 0; i--) {
    listAsArray[i].next = listAsArray[i - 1];
  }
  listAsArray[0].next = null;

  return { newStart: listAsArray[listAsArray.length - 1], newEnd: listAsArray[0] }; // return pointer to new tail
}

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

console.log(getVals(reverseKGroup(a1, 2)));

export function getVals(root: ListNode | null) {
  if (root === null) return [];
  return [root.val, ...getVals(root.next)];
}
