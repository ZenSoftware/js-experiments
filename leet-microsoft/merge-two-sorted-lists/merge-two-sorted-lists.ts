/**
 * https://leetcode.com/problems/merge-two-sorted-lists/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let pointer1 = list1;
  let pointer2 = list2;

  while (pointer1 !== null && pointer2 !== null) {}

  return null;
}

export function toList(nums: number[]): ListNode | null {
  if (nums === null || nums.length === 0) return null;
  if (nums.length === 1) new ListNode(nums[0]);

  let pointer = new ListNode(nums[nums.length - 1]);

  for (let i = nums.length - 2; i >= 0; i--) {
    const node = new ListNode(nums[i]);
    node.next = pointer;
    pointer = node;
  }

  return pointer;
}

export function toArray(head: ListNode | null) {
  if (head === null) return [];

  let pointer: any = head;
  const results: number[] = [];
  do {
    results.push(pointer.val);
    pointer = pointer.next;
  } while (pointer !== null);

  return results;
}
