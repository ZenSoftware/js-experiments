/**
 * https://leetcode.com/problems/add-two-numbers/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Time: O()
 * Space: O();
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return null;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function toList(list: number[]): ListNode {
  const first = new ListNode(list[0]);
  let prev = first;

  for (let i = 1; i < list.length; i++) {
    prev.next = new ListNode(list[i]);
    prev = prev.next;
  }

  return first;
}

export function toArray(list: ListNode): number[] {
  const result: number[] = [];
  let head = list;

  do {
    result.push(head.val);
    head = head.next as ListNode;
  } while (head !== null);

  return result;
}
