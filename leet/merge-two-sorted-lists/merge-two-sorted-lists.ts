/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null && list2 === null) return null;
  else if (list2 === null) return list1;
  else if (list1 === null) return list2;

  const head = list1.val < list2.val ? list1 : list2;

  return head;
}

const nodeA1 = new ListNode(1);
const nodeA2 = new ListNode(2);
const nodeA3 = new ListNode(4);
nodeA1.next = nodeA2;
nodeA2.next = nodeA3;

const nodeB1 = new ListNode(1);
const nodeB2 = new ListNode(3);
const nodeB3 = new ListNode(4);
nodeB1.next = nodeB2;
nodeB2.next = nodeB3;

const merged = mergeTwoLists(nodeA1, nodeB1);
console.log(getValues(merged));

function getValues(root: ListNode | null): number[] {
  if (root === null) return [];
  return [root.val, ...getValues(root.next)];
}
