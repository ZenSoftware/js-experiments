/**
 * https://leetcode.com/problems/recover-binary-search-tree/
 * You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
 * The number of nodes in the tree is in the range [2, 1000].
 * -231 <= Node.val <= 231 - 1
 */

// Solution: https://leetcode.com/problems/recover-binary-search-tree/solutions/2829561/easy-ts-solution/

export function recoverTree(root: TreeNode | null): void {
  if (!root) return;
  let prev: TreeNode | null = null;
  let first: TreeNode | null = null;
  let second: TreeNode | null = null;
  inOrder(root);

  let temp = first!.val;
  first!.val = second!.val;
  second!.val = temp;

  function inOrder(node: TreeNode | null) {
    if (!node) return;

    inOrder(node.left);

    if (prev && prev.val > node.val) {
      if (!first) {
        first = prev;
      }
      second = node;
    }
    prev = node;

    inOrder(node.right);
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
