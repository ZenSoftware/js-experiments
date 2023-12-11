/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii/
 * Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.
 * 1 <= n <= 8
 */

export function generateTrees(n: number): Array<TreeNode | null> {
  const result: Array<TreeNode | null> = [];

  function dfs() {}

  return [];
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
