/**
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
 * The number of nodes in the list is n.
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * 1 <= left <= right <= n
 */
export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head?.next) return head;
  let pointerHead = new ListNode(0, head);
  let pointer: ListNode | null = pointerHead;
  let beforeLeft: ListNode;

  let count = 0;
  while (count < left) {
    count++;
    beforeLeft = pointer as ListNode;
    pointer = pointer!.next;
  }

  let numberToSwap = right - left;
  for (let i = 0; i < numberToSwap; i++) {
    pointer = beforeLeft!.next;
    for (let j = 0; j < numberToSwap - 1; j++) {
      const temp = pointer!.next;
      pointer!.next = pointer!.next!.next;
      temp!.next = pointer;
      beforeLeft!.next = temp;
    }
  }

  return pointerHead.next;
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

// const list = toList([1, 2, 3, 4, 5]);
// const result = reverseBetween(list, 1, 4);
// console.log(toArray(result));
