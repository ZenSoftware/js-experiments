/**
 * https://leetcode.com/problems/merge-k-sorted-lists/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * k == lists.length
 * 0 <= k <= 104
 * 0 <= lists[i].length <= 500
 * -104 <= lists[i][j] <= 104
 * lists[i] is sorted in ascending order.
 * The sum of lists[i].length will not exceed 104.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists === null || lists.length === 0) {
    return null;
  }

  return divide(lists, 0, lists.length - 1);
}

function divide(lists: Array<ListNode | null>, start: number, end: number): ListNode | null {
  if (start === end) return lists[start];

  const mid = Math.floor((start + end) / 2);
  const left = divide(lists, start, mid);
  const right = divide(lists, mid + 1, end);

  return conquer(left, right);
}

function conquer(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let result: ListNode | null;
  if (l1.val < l2.val) {
    result = l1;
    result.next = conquer(l1.next, l2);
  } else {
    result = l2;
    result.next = conquer(l1, l2.next);
  }

  return result;
}

export function arrayToList(nums: number[]) {
  if (!nums || nums.length === 0) return null;
  let pointer = new ListNode(nums[nums.length - 1]);
  for (let i = nums.length - 2; i >= 0; i--) {
    let node = new ListNode(nums[i]);
    node.next = pointer;
    pointer = node;
  }
  return pointer;
}

export function listToArray(head: ListNode | null) {
  if (!head) return [];
  const result: number[] = [];
  let pointer: ListNode | null = head;
  do {
    result.push(pointer.val);
    pointer = pointer.next;
  } while (pointer !== null);
  return result;
}
