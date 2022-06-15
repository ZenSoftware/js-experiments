/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {}

const a1 = new ListNode(1);
const a2 = new ListNode(3);
const a3 = new ListNode(5);
a1.next = a2;
a2.next = a3;

const b1 = new ListNode(2);
const b2 = new ListNode(4);
const b3 = new ListNode(6);
b1.next = b2;
b2.next = b3;

const res = mergeKLists([a1, b1]);
console.log(getVals(res));

function getVals(root: ListNode | null) {
  if (root === null) return [];
  return [root.val, ...getVals(root.next)];
}
