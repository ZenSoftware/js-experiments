/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 */

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const stack: TreeNodeLevel[] = [];
  stack.push({ level: 0, node: root });

  while (stack.length) {
    const current = stack.shift() as TreeNodeLevel;

    if (result[current.level] === undefined) {
      result[current.level] = [];
    }
    result[current.level].push(current.node.val);

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

interface TreeNodeLevel {
  level: number;
  node: TreeNode;
}
