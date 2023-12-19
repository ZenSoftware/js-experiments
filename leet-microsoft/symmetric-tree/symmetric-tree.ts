/**
 * https://leetcode.com/problems/symmetric-tree/
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 */

export function isSymmetric(root: TreeNode | null): boolean {
  if (!root || (!root.left && !root.right)) return true;

  if (root.left && root.right) {
    const leftVals = bfsLeftFirst(root.left);
    const rightVals = bfsRightFirst(root.right);

    if (leftVals.length !== rightVals.length) return false;

    for (let i = 0; i < leftVals.length; i++) {
      if (leftVals[i] !== rightVals[i]) return false;
    }
    return true;
  }

  return false;
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

export function bfsLeftFirst(root: TreeNode | null) {
  if (!root) return [];

  const result: (number | null)[] = [];
  const stack: (TreeNode | null)[] = [];
  stack.unshift(root);

  while (stack.length) {
    const current = stack.shift() as TreeNode;

    if (current) {
      result.push(current.val);
      stack.push(current.left);
      stack.push(current.right);
    } else {
      result.push(null);
    }
  }

  return result;
}

export function bfsRightFirst(root: TreeNode | null) {
  if (!root) return [];

  const result: (number | null)[] = [];
  const stack: (TreeNode | null)[] = [];
  stack.unshift(root);

  while (stack.length) {
    const current = stack.shift() as TreeNode;

    if (current) {
      result.push(current.val);
      stack.push(current.right);
      stack.push(current.left);
    } else {
      result.push(null);
    }
  }

  return result;
}
