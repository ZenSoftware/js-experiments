/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 * The number of nodes in the tree is in the range [0, 105].
 * -1000 <= Node.val <= 1000
 */

export function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let smallest = Infinity;

  function dfs(node: TreeNode, depth: number) {
    if (!node.left && !node.right) {
      if (depth < smallest) smallest = depth;
    }

    if (depth > smallest) return;

    if (node.left) dfs(node.left, depth + 1);
    if (node.right) dfs(node.right, depth + 1);
  }

  dfs(root, 1);
  return smallest;
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

// const n1 = new TreeNode(1);
// const n2 = new TreeNode(2);
// const n3 = new TreeNode(3);
// const n4 = new TreeNode(4);
// const n5 = new TreeNode(5);
// const n6 = new TreeNode(6);

// n1.left = n2;
// n1.right = n3;
// n3.left = n4;
// n3.right = n5;

const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);

n2.right = n3;
n3.right = n4;
n4.right = n5;
n5.right = n6;

console.log(minDepth(n2));
