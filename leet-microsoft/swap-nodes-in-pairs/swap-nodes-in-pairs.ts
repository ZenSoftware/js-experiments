/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 * The number of nodes in the list is in the range [0, 100].
 * 0 <= Node.val <= 100
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head?.next) return head;

  const first = head;
  const second = head.next;

  const remaining = swapPairs(second.next);

  first.next = remaining;
  second.next = first;

  return second;
}

export function arrayToList(nums: number[]) {
  if (!nums || nums.length === 0) return null;

  let pointer = new ListNode(nums[nums.length - 1]);
  for (let i = nums.length - 2; i >= 0; i--) {
    const node = new ListNode(nums[i]);
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
