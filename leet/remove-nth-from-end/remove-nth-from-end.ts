/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Given the head of a linked list, remove the nth node from the end
 * of the list and return its head.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if ((<ListNode>head).next === null) return null;

  let list: ListNode[] = [];
  let next = head as ListNode;
  list.push(next);

  while (next.next !== null) {
    next = next.next as ListNode;
    list.push(next);
  }

  const index = list.length - 1 - n;
  list[index].next = list[index + 1].next;

  next = head as ListNode;
  while (next.next !== null) {
    next = next.next as ListNode;
    // console.log(next.val);
  }

  return head;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(removeNthFromEnd(node1, 2));
