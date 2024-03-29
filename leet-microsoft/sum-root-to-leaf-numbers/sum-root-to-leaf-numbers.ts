/**
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 * You are given the root of a binary tree containing digits from 0 to 9 only.
 * Each root-to-leaf path in the tree represents a number.
 * For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
 * Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
 * A leaf node is a node with no children.
 * The number of nodes in the tree is in the range [1, 1000].
 * 0 <= Node.val <= 9
 * The depth of the tree will not exceed 10.
 */

export function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0;

  let result = 0;

  function dfs(node: TreeNode, path: string) {
    if (!node.left && !node.right) {
      result += Number(path + node.val);
    }

    path += node.val;
    if (node.left) dfs(node.left, path);
    if (node.right) dfs(node.right, path);
  }

  dfs(root, '');
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
