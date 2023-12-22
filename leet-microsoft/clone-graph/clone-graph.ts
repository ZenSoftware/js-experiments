/**
 * https://leetcode.com/problems/clone-graph/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 * class Node {
 *     public int val;
 *     public List<Node> neighbors;
 * }
 * Test case format:
 * For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.
 * An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
 * The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
 * The number of nodes in the graph is in the range [0, 100].
 * 1 <= Node.val <= 100
 * Node.val is unique for each node.
 * There are no repeated edges and no self-loops in the graph.
 * The Graph is connected and all nodes can be visited starting from the given node.
 */

export function cloneGraph(node: Node | null): Node | null {
  if (!node) return null;

  const copyMap = new Map<number, Node>();

  const root = new Node(node.val);
  root.neighbors = node.neighbors.map(n => new Node(n.val));
  copyMap.set(root.val, root);

  search(node, copyMap);
  fillNeighbors(node, copyMap);

  return root;
}

export class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function search(
  node: Node,
  copyMap: Map<number, Node>,
  visited: Map<Node, true> = new Map<Node, true>()
) {
  visited.set(node, true);

  let coppiedNode = copyMap.get(node.val);

  if (coppiedNode === undefined) {
    coppiedNode = new Node(node.val);
    copyMap.set(coppiedNode.val, coppiedNode);
  }

  for (let neighbor of node.neighbors) {
    if (!visited.get(neighbor)) {
      search(neighbor, copyMap, visited);
    }
  }
}

function fillNeighbors(
  node: Node,
  copyMap: Map<number, Node>,
  visited: Map<Node, true> = new Map<Node, true>()
) {
  visited.set(node, true);

  const neighborCopies: Node[] = [];

  for (let neighbor of node.neighbors) {
    const neighborCopy = copyMap.get(neighbor.val) as Node;
    neighborCopies.push(neighborCopy);

    if (!visited.get(neighbor)) {
      fillNeighbors(neighbor, copyMap, visited);
    }
  }

  const nodeCopy = copyMap.get(node.val) as Node;
  nodeCopy.neighbors = neighborCopies;
}
