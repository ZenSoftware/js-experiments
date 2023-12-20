/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder and inorder consist of unique values.
 * Each value of inorder also appears in preorder.
 * preorder is guaranteed to be the preorder traversal of the tree.
 * inorder is guaranteed to be the inorder traversal of the tree.
 */

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);
  const nextPreorder = preorder.slice(1);

  const i = inorder.indexOf(preorder[0]);
  const nextInorder = [...inorder.slice(0, i), ...inorder.slice(i + 1)];

  root.left = buildTree(nextPreorder, inorder.slice(0, i));
  root.right = buildTree([], inorder.slice(i + 1));

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

export function dfsPreorder(root: TreeNode | null) {
  if (!root) return [];
  const result: number[] = [];

  function search(node: TreeNode) {
    result.push(node.val);
    if (node.left) search(node.left);
    if (node.right) search(node.right);
  }

  search(root);
  return result;
}

export function dfsInorder(root: TreeNode | null) {
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

// const n3 = new TreeNode(3);
// const n9 = new TreeNode(9);
// const n20 = new TreeNode(20);
// const n15 = new TreeNode(15);
// const n7 = new TreeNode(7);

// n3.left = n9;
// n3.right = n20;
// n20.left = n15;
// n20.right = n7;

// console.log(dfsPreorder(n3));
