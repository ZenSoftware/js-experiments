/**
 * https://leetcode.com/problems/rotate-list/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given the head of a linked list, rotate the list to the right by k places.
 * The number of nodes in the list is in the range [0, 500].
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return null;
  else if (head.next === null) return head;

  let pointer: ListNode | null = head;
  let length = 0;
  while (pointer !== null) {
    length++;
    pointer = pointer.next;
  }

  k = k % length;
  if (k === 0) return head;

  let trail: ListNode;
  let tail: ListNode;
  let counter = 0;
  pointer = head;
  while (pointer !== null) {
    if (counter < k) {
      counter++;
    } else if (counter === k) {
      trail = head;
      counter++;
    } else {
      trail = trail!.next as ListNode;
    }

    if (pointer.next === null) tail = pointer;

    pointer = pointer.next;
  }

  tail!.next = head;
  head = trail!.next;
  trail!.next = null;

  return head;
}

export function toList(elements: number[]) {
  if (elements.length === 0) return null;
  let pointer = new ListNode(elements[elements.length - 1]);
  for (let i = elements.length - 2; i >= 0; i--) {
    const node = new ListNode(elements[i]);
    node.next = pointer;
    pointer = node;
  }
  return pointer;
}

export function toArray(list: ListNode | null) {
  if (list === null) return [];
  const result: number[] = [];
  let pointer: ListNode | null = list;
  while (pointer !== null) {
    result.push(pointer.val);
    pointer = pointer.next;
  }
  return result;
}

// const list = toList([1, 2, 3]);
// const result = rotateRight(list, 1);
// console.log(toArray(result));
