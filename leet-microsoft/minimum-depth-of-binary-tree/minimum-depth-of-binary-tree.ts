/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 * The number of nodes in the tree is in the range [0, 105].
 * -1000 <= Node.val <= 1000
 */

export function minDepth(root: TreeNode | null): number {
  return 0;
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
