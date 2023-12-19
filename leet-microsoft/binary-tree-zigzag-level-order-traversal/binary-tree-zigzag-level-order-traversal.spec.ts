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

  it('evaluates correctly 2', () => {
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    const n3 = new TreeNode(3);
    const n4 = new TreeNode(4);
    const n5 = new TreeNode(5);

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n3.right = n5;

    expect(zigzagLevelOrder(n1)).toEqual([[1], [3, 2], [4, 5]]);
  });
});
