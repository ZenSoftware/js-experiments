/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes
 * (i.e., only nodes themselves may be changed.)
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return head;

  let traverseHead: any = head;
  let result = head.next;

  const rest = traverseHead.next.next;
  traverseHead.next.next = traverseHead;
  traverseHead.next = rest;

  if (!traverseHead.next?.next) return result;

  traverseHead = head;

  let i = 1;
  while (traverseHead.next.next !== null) {
    if (i % 2 === 1) {
      const ahead1 = traverseHead.next;
      const ahead2 = traverseHead.next.next;
      const ahead3 = traverseHead.next.next.next;
      traverseHead.next = ahead2;
      ahead2.next = ahead1;
      ahead1.next = ahead3;
    }
    traverseHead = traverseHead.next;
    i++;
  }

  return result;
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

console.log(getValues(swapPairs(a1)));

function getValues(head: ListNode | null) {
  if (head === null) return [];
  return [head.val, ...getValues(head.next)];
}
