/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 */

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const stack: TreeNode[] = [];
  stack.push(root);
  result.push([root.val]);

  while (stack.length) {
    const current = stack.shift() as TreeNode;
    const pair: number[] = [];

    if (current.left) {
      stack.push(current.left);
      pair.push(current.left.val);
    }

    if (current.right) {
      stack.push(current.right);
      pair.push(current.right.val);
    }

    if (pair.length > 0) result.push(pair);
  }

  return result;
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
