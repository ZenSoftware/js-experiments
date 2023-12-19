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
    }

    if (current.node.right) {
      right = {
        level: current.level + 1,
        node: current.node.right,
      };
    }

    if (current.level % 2 === 1) {
      if (left) stack.push(left);
      if (right) stack.push(right);
    } else {
      if (right) stack.push(right);
      if (left) stack.push(left);
    }
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

const n3 = new TreeNode(3);
const n9 = new TreeNode(9);
const n20 = new TreeNode(20);
const n15 = new TreeNode(15);
const n7 = new TreeNode(7);

n3.left = n9;
n3.right = n20;
n20.left = n15;
n20.right = n7;

console.log(zigzagLevelOrder(n3));
