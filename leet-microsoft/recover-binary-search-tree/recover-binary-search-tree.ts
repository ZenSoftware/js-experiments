/**
 * https://leetcode.com/problems/recover-binary-search-tree/
 * You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
 * The number of nodes in the tree is in the range [2, 1000].
 * -231 <= Node.val <= 231 - 1
 */

export function recoverTree(root: TreeNode | null): void {
  if (!root) return;

  if (root.left) {
    if (root.left.val > root.val) {
      const tmp = root.left.val;
      root.left.val = root.val;
      root.val = tmp;
    }
    recoverTree(root.left);
  }

  if (root.right) {
    if (root.right.val < root.val) {
      const tmp = root.right.val;
      root.right.val = root.val;
      root.val = tmp;
    }

    recoverTree(root.right);
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
