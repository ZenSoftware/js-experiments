/**
 * https://leetcode.com/problems/symmetric-tree/
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 */

export function isSymmetric(root: TreeNode | null): boolean {
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

export function bfs(root: TreeNode | null) {
  if (!root) return [];

  const result: number[] = [];
  const stack: TreeNode[] = [];
  stack.push(root);

  while (stack.length) {
    const current = stack.pop() as TreeNode;
    result.push(current!.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return result;
}

export function dfs(root: TreeNode | null) {
  if (!root) return [];
  const result: number[] = [];

  function search(node: TreeNode) {
    if (node.left) search(node.left);
    result.push(node.val);
    if (node.right) search(node.right);
  }

  search(root);
  return result;
}

const r1 = new TreeNode(1);
const l2 = new TreeNode(2);
const r2 = new TreeNode(2);
const l3 = new TreeNode(3);
const r4 = new TreeNode(4);
const l4 = new TreeNode(4);
const r3 = new TreeNode(3);

r1.left = l2;
r1.right = r2;
l2.left = l3;
l2.right = r4;
r2.left = l4;
r2.right = r3;

// [1, 2, 2, 3, 4, 4, 3]

const bfsValues = bfs(r1);
console.log(bfsValues);

const dfsValues = dfs(r1);
console.log(dfsValues);
