/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a binary tree
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 * The number of nodes in the tree is in the range [0, 6000].
 * -100 <= Node.val <= 100
 */

export function connect(root: Node | null): Node | null {
  if (!root) return null;

  const levels: Node[][] = [];
  const queue: NodeLevel[] = [{ level: 0, node: root }];

  while (queue.length) {
    const current = queue.shift() as NodeLevel;

    if (levels[current.level] === undefined) {
      levels[current.level] = [];
    }

    levels[current.level].push(current.node);

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

  for (const level of levels) {
    for (let i = 0; i < level.length - 1; i++) {
      level[i].next = level[i + 1];
    }
  }

  return root;
}

interface NodeLevel {
  level: number;
  node: Node;
}

export class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}
