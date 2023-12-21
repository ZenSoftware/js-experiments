/**
 * https://leetcode.com/problems/path-sum-ii/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
 * A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 */
export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return [];

  const result: number[][] = [];

  function dfs(currentNode: TreeNode, inputSum: number, currentPath: number[]) {
    const currentSum = inputSum + currentNode.val;

    if (currentSum === targetSum && !currentNode.left && !currentNode.right) {
      result.push([...currentPath, currentNode.val]);
      return;
    }

    if (currentNode.left) {
      currentPath.push(currentNode.val);
      dfs(currentNode.left, currentSum, currentPath);
      currentPath.pop();
    }

    if (currentNode.right) {
      currentPath.push(currentNode.val);
      dfs(currentNode.right, currentSum, currentPath);
      currentPath.pop();
    }
  }

  dfs(root, 0, []);
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

const n5 = new TreeNode(5);
const n4 = new TreeNode(4);
const n11 = new TreeNode(11);
const n7 = new TreeNode(7);
const n2 = new TreeNode(2);
const n8 = new TreeNode(8);
const n13 = new TreeNode(13);
const n4_2 = new TreeNode(4);
const n1 = new TreeNode(1);
const n5_2 = new TreeNode(5);

n5.left = n4;
n5.right = n8;
n4.left = n11;
n11.left = n7;
n11.right = n2;
n8.left = n13;
n8.right = n4_2;
n4_2.left = n5_2;
n4_2.right = n1;

console.log(pathSum(n5, 22));
