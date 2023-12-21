/**
 * https://leetcode.com/problems/balanced-binary-tree/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given a binary tree, determine if it is height-balanced.
 * The number of nodes in the tree is in the range [0, 5000].
 * -104 <= Node.val <= 104
 */
export function isBalanced(root: TreeNode | null): boolean {
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
