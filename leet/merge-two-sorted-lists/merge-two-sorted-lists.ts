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

  let result: any;
  let head1: any; // list to insert into
  let head2: any; // list to remove from

  // set the list to insert into as the one with the smaller root value
  if (list1.val <= list2.val) {
    head1 = list1;
    head2 = list2;
  } else {
    head1 = list2;
    head2 = list1;
  }

  // keep a pointer to the root for the return result
  result = head1;

  while (head1 !== null && head2 !== null) {
    // if head1 is the last item, place the remaining of head2 as the tail
    if (head1.next === null) {
      head1.next = head2;
      return result;
    }

    if (head1.val <= head2.val && head2.val <= head1.next.val) {
      const nextHead2 = head2.next;
      // insert inbetween
      head2.next = head1.next;
      head1.next = head2;
      // move head2's pointer forward
      head2 = nextHead2;
    }

    // move head1's pointer forward
    head1 = head1.next;
  }

  return result;
}

const nodeA1 = new ListNode(1);
const nodeA2 = new ListNode(2);
const nodeA3 = new ListNode(4);
nodeA1.next = nodeA2;
nodeA2.next = nodeA3;

const nodeB1 = new ListNode(0);
const nodeB2 = new ListNode(3);
const nodeB3 = new ListNode(4);
const nodeB4 = new ListNode(5);
nodeB1.next = nodeB2;
nodeB2.next = nodeB3;
nodeB3.next = nodeB4;

const merged = mergeTwoLists(nodeA1, nodeB1);
console.log(getValues(merged));

function getValues(root: ListNode | null): number[] {
  if (root === null) return [];
  return [root.val, ...getValues(root.next)];
}
