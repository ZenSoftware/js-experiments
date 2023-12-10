/**
 * https://leetcode.com/problems/invert-binary-tree/
 * Given the root of a binary tree, invert the tree, and return its root.
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let stack: TreeNode[] = [];
  stack.push(root);

  while (stack.length) {
    const cur = stack.pop() as TreeNode;
    let temp = cur.left;
    cur.left = cur.right;
    cur.right = temp;
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }

  return root;
}

export function bfsArray(root: TreeNode | null): number[] {
  if (!root) return [];

  let result: number[] = [];
  let stack: TreeNode[] = [];
  stack.push(root);

  while (stack.length) {
    const cur = stack.shift() as TreeNode;
    result.push(cur.val);
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
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
