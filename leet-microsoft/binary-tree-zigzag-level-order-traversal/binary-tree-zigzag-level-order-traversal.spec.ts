import { zigzagLevelOrder, TreeNode } from './binary-tree-zigzag-level-order-traversal';

describe('Binary Tree Zigzag Level Order Traversal', () => {
  it('evaluates correctly 1', () => {
    const n3 = new TreeNode(3);
    const n9 = new TreeNode(9);
    const n20 = new TreeNode(20);
    const n15 = new TreeNode(15);
    const n7 = new TreeNode(7);

    n3.left = n9;
    n3.right = n20;
    n20.left = n15;
    n20.right = n7;

    expect(zigzagLevelOrder(n3)).toEqual([[3], [20, 9], [15, 7]]);
  });
});
