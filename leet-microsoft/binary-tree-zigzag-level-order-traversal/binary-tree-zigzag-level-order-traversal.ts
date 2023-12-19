/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 */

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const stack: TreeNodeLevel[] = [];
  stack.push({ level: 0, node: root });

  while (stack.length) {
    const current = stack.shift() as TreeNodeLevel;

    if (result[current.level] === undefined) result[current.level] = [];
    result[current.level].push(current.node.val);

    let left: TreeNodeLevel | undefined;
    let right: TreeNodeLevel | undefined;

    if (current.node.left) {
      left = {
        level: current.level + 1,
        node: current.node.left,
      };
      stack.push(left);
    }

    if (current.node.right) {
      right = {
        level: current.level + 1,
        node: current.node.right,
      };
      stack.push(right);
    }
  }

  for (let i = 1; i < result.length; i += 2) {
    result[i].reverse();
  }

  return result;
}

export interface TreeNodeLevel {
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
