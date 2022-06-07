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
  if (head === null) return null;

  let first: any = head;
  let second: any = head;

  for (let i = 0; i < n; i++) {
    if (second.next === null) {
      console.log('delete head');
      head = head.next;
      return head;
    }
    second = second.next;
  }

  while (second.next !== null) {
    first = first.next;
    second = second.next;
  }

  first.next = first.next.next;

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

const result = removeNthFromEnd(node1, 5);
console.log(getValues(result));

function getValues(root: ListNode | null) {
  if (root === null) return [];
  return [root.val, ...getValues(root.next)];
}
