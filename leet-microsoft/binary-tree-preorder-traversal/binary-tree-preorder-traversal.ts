export function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];

  function dfs(node: TreeNode) {
    result.push(node.val);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }

  dfs(root);
  return result;
}

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
