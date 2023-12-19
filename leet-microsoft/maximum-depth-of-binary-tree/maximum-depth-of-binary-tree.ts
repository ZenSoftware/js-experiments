/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * The number of nodes in the tree is in the range [0, 104].
 * -100 <= Node.val <= 100
 */

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let deepest = -Infinity;

  const stack: TreeNodeLevel[] = [];
  stack.push({ level: 1, node: root });

  while (stack.length) {
    const current = stack.shift() as TreeNodeLevel;

    if (current.level > deepest) deepest = current.level;

    if (current.node.left) {
      const left: TreeNodeLevel = {
        level: current.level + 1,
        node: current.node.left,
      };
      stack.push(left);
    }

    if (current.node.right) {
      const right: TreeNodeLevel = {
        level: current.level + 1,
        node: current.node.right,
      };
      stack.push(right);
    }
  }

  return deepest;
}

interface TreeNodeLevel {
  level: number;
  node: TreeNode;
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
