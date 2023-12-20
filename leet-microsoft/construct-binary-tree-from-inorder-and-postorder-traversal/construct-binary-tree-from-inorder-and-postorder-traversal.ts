/**
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder and postorder consist of unique values.
 * Each value of postorder also appears in inorder.
 * inorder is guaranteed to be the inorder traversal of the tree.
 * postorder is guaranteed to be the postorder traversal of the tree.
 */

export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0) return null;

  const last = postorder.pop() as number;
  const root = new TreeNode(last);

  const i = inorder.findIndex(x => x === last);
  const inorder_right = inorder.slice(i + 1);
  const inorder_left = inorder.slice(0, i);

  root.right = buildTree(inorder_right, postorder);
  root.left = buildTree(inorder_left, postorder);

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

export function dfsInOrder(root: TreeNode | null) {
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

export function dfsPostOrder(root: TreeNode | null) {
  if (!root) return [];
  const result: number[] = [];

  function search(node: TreeNode) {
    if (node.left) search(node.left);
    if (node.right) search(node.right);
    result.push(node.val);
  }

  search(root);
  return result;
}

// const inorder = [9, 3, 15, 20, 7];
// const postorder = [9, 15, 7, 20, 3];
// const result = buildTree(inorder, postorder);
// console.log(dfsInOrder(result));
// console.log(dfsPostOrder(result));
