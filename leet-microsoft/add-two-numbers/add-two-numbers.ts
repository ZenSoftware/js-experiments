/**
 * https://leetcode.com/problems/add-two-numbers/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * - The number of nodes in each linked list is in the range [1, 100].
 * - 0 <= Node.val <= 9
 * - It is guaranteed that the list represents a number that does not have leading zeros.
 */

/**
 * Time: O()
 * Space: O();
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result: number[] = [];
  let a: any = l1;
  let b: any = l2;
  let carry = 0;

  do {
    let valA = 0;
    if (a !== null) valA = a.val;

    let valB = 0;
    if (b !== null) valB = b.val;

    const sum = valA + valB + carry;

    if (sum >= 10) {
      result.push(sum - 10);
      carry = 1;
    } else {
      result.push(sum);
      carry = 0;
    }

    if (a !== null) a = a.next;
    if (b !== null) b = b.next;
  } while (a !== null || b !== null);

  if (carry !== 0) result.push(1);

  return toList(result);
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
