/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii/
 * Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.
 * 1 <= n <= 8
 */

export function generateTrees(end: number, start = 1): Array<TreeNode | null> {
  if (end < start) return [null];
  if (end === start) return [new TreeNode(end)];
  let trees: TreeNode[] = [];
  for (let i = start; i <= end; i++) {
    const leftTrees = generateTrees(i - 1, start);
    const rightTrees = generateTrees(end, i + 1);
    for (let left of leftTrees) {
      for (let right of rightTrees) {
        trees.push(new TreeNode(i, left, right));
      }
    }
  }
  return trees;
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
