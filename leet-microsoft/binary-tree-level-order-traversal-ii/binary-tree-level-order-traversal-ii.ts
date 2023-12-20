/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 */

export function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: TreeNodeLevel[] = [{ level: 0, node: root }];

  while (queue.length) {
    const current = queue.shift() as TreeNodeLevel;

    if (!result[current.level]) result[current.level] = [];

    result[current.level].push(current.node.val);

    if (current.node.left) {
      queue.push({
        level: current.level + 1,
        node: current.node.left,
      });
    }

    if (current.node.right) {
      queue.push({
        level: current.level + 1,
        node: current.node.right,
      });
    }
  }

  return result.reverse();
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

// const n3 = new TreeNode(3);
// const n9 = new TreeNode(9);
// const n20 = new TreeNode(20);
// const n15 = new TreeNode(15);
// const n7 = new TreeNode(7);

// n3.left = n9;
// n3.right = n20;
// n20.left = n15;
// n20.right = n7;

// console.log(levelOrderBottom(n3));
