/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * The number of nodes in the tree is in the range [0, 104].
 * -100 <= Node.val <= 100
 */

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let deepest = -Infinity;

  function dfs(node: TreeNode, depth: number) {
    if (depth > deepest) deepest = depth;
    if (node.left) dfs(node.left, depth + 1);
    if (node.right) dfs(node.right, depth + 1);
  }

  dfs(root, 1);

  return deepest;
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
