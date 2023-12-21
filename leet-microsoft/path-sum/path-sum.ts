/**
 * https://leetcode.com/problems/path-sum/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 */
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  let foundPath = false;

  function dfs(currentNode: TreeNode, inputSum: number) {
    if (foundPath) return;

    const currentSum = inputSum + currentNode.val;
    if (!currentNode.left && !currentNode.right && currentSum === targetSum) {
      foundPath = true;
    }

    if (currentNode.left) {
      dfs(currentNode.left, currentSum);
    }

    if (currentNode.right) {
      dfs(currentNode.right, currentSum);
    }
  }

  dfs(root, 0);
  return foundPath;
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
