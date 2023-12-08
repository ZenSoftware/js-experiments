/**
 * https://leetcode.com/problems/add-two-numbers/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * - The number of nodes in each linked list is in the range [1, 100].
 * - 0 <= Node.val <= 9
 * - It is guaranteed that the list represents a number that does not have leading zeros.
 */

/**
 * Time: O(n)
 * Space: O(n)
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let p1: ListNode | null = l1;
  let p2: ListNode | null = l2;
  let carry = 0;

  let head: ListNode;
  const sum = p1.val + p2.val;
  if (sum < 10) {
    head = new ListNode(sum);
  } else {
    head = new ListNode(sum - 10);
    carry = 1;
  }
  let pr = head;
  p1 = p1.next;
  p2 = p2.next;

  while (p1 !== null || p2 !== null) {
    let p1Val = 0;
    let p2Val = 0;
    if (p1) p1Val = p1.val;
    if (p2) p2Val = p2.val;
    const sum = p1Val + p2Val + carry;

    if (sum < 10) {
      pr.next = new ListNode(sum);
      pr = pr.next;
      carry = 0;
    } else {
      pr.next = new ListNode(sum - 10);
      pr = pr.next;
      carry = 1;
    }

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }

  if (carry === 1) pr.next = new ListNode(1);

  return head;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function toList(nums: number[]) {
  if (nums.length === 0) return null;

  let head = new ListNode(nums[nums.length - 1]);

  for (let i = nums.length - 2; i >= 0; i--) {
    const node = new ListNode(nums[i]);
    node.next = head;
    head = node;
  }

  return head;
}

export function toArray(root: ListNode | null) {
  if (root === null) return [];

  let result: number[] = [];
  let pointer: ListNode | null = root;

  while (pointer !== null) {
    result.push(pointer.val);
    pointer = pointer.next;
  }

  return result;
}
