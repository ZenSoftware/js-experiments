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

  let queue: Node[] = [root];

  while (queue.length) {
    for (let i = 0; i < queue.length - 1; i++) {
      queue[i].next = queue[i + 1];
    }

    let newQueue: Node[] = [];
    for (let node of queue) {
      node.left && newQueue.push(node.left);
      node.right && newQueue.push(node.right);
    }
    queue = newQueue;
  }

  return root;
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
