/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * You are given an array of k linked-lists lists, each linked-list is sorted
 * in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  let mergeInto: any = null;
  let mergeIntoIndex = 0;

  for (let l of lists) {
    if (l !== null) {
      mergeInto = l;
      break;
    }
    mergeIntoIndex++;
  }

  if (mergeInto === null) return null;

  for (let i = mergeIntoIndex + 1; i < lists.length; i++) {
    mergeInto = merge2Lists(mergeInto, lists[i]);
  }

  return mergeInto;
}

function merge2Lists(listA: ListNode | null, listB: ListNode | null): ListNode | null {
  if (listA === null) return listB;
  if (listB === null) return listA;

  let head1, head2;

  if (listA.val < listB.val) {
    head1 = listA;
    head2 = listB;
  } else {
    head1 = listB;
    head2 = listA;
  }

  const result = head1;

  while (head1 !== null && head2 !== null) {
    if (head1.next === null) {
      head1.next = head2;
      return result;
    }

    if (head1.val <= head2.val && head2.val <= head1.next.val) {
      const head2temp = head2.next;
      head2.next = head1.next;
      head1.next = head2;
      head2 = head2temp;
    } else {
      head1 = head1.next;
    }
  }

  return result;
}

const a1 = new ListNode(2);
const a2 = new ListNode(4);
const a3 = new ListNode(6);
a1.next = a2;
a2.next = a3;

const b1 = new ListNode(1);
const b2 = new ListNode(3);
const b3 = new ListNode(5);
b1.next = b2;
b2.next = b3;

const res = mergeKLists([null, a1, null, b2]);
console.log(getVals(res));

export function getVals(root: ListNode | null) {
  if (root === null) return [];
  return [root.val, ...getVals(root.next)];
}
