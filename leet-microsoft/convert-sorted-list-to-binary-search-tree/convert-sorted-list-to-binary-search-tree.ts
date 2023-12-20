/**
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 * The number of nodes in head is in the range [0, 2 * 104].
 * -105 <= Node.val <= 105
 */

export function sortedListToBST(head: ListNode | null): TreeNode | null {
  return null;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function toList(vals: number[]) {
  if (vals.length === 0) return null;

  let pointer = new ListNode(vals[vals.length - 1]);

  for (let i = vals.length - 2; i >= 0; i--) {
    const node = new ListNode(vals[i]);
    node.next = pointer;
    pointer = node;
  }

  return pointer;
}

export function toArray(root: ListNode | null) {
  if (!root) return [];
  const result: number[] = [];

  let pointer: ListNode | null = root;
  while (pointer) {
    result.push(pointer.val);
    pointer = pointer.next;
  }

  return result;
}

const head = toList([-10, -3, 0, 5, 9]);
const result = sortedListToBST(head);
console.log(result);
