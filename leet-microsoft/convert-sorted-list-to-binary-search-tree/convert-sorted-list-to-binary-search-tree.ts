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
