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
    const cur = stack.shift() as TreeNode;
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }

  return root;
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

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n6 = new TreeNode(6);
const n7 = new TreeNode(7);
const n9 = new TreeNode(9);
n4.left = n2;
n4.right = n7;
n2.left = n1;
n2.right = n3;
n7.left = n6;
n7.right = n9;
const root = n4;

invertTree(root);
