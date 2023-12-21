/**
 * https://leetcode.com/problems/balanced-binary-tree/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given a binary tree, determine if it is height-balanced.
 * The number of nodes in the tree is in the range [0, 5000].
 * -104 <= Node.val <= 104
 */
export function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  let imabalnceFound = false;

  function dfs(node: TreeNode | null) {
    if (!node) return 0;

    if (imabalnceFound) return;

    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);

    const imabalanced = Math.abs(leftDepth - rightDepth) >= 2;
    if (imabalanced) imabalnceFound = true;

    return 1 + Math.max(leftDepth, rightDepth);
  }

  dfs(root);
  return !imabalnceFound;
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

// console.log(isBalanced(n3));

//============================================

// const n1 = new TreeNode(1);
// const n2 = new TreeNode(2);
// const n3 = new TreeNode(3);
// const n4 = new TreeNode(4);
// const n5 = new TreeNode(5);
// const n6 = new TreeNode(6);
// const n7 = new TreeNode(7);

// n1.left = n2;
// n2.left = n3;
// n3.left = n4;
// n3.right = n5;
// n2.right = n6;
// n1.right = n7;

// console.log(isBalanced(n1));
