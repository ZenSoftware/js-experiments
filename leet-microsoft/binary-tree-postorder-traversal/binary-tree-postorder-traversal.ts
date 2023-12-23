/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/submissions/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 */

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];

  function dfs(node: TreeNode) {
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    result.push(node.val);
  }

  dfs(root);
  return result;
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
