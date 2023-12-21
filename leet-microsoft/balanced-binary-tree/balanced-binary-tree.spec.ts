import { isBalanced, TreeNode } from './balanced-binary-tree';

describe('Balanced Binary Tree', () => {
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

    expect(isBalanced(n3)).toEqual(true);
  });

  it('evaluates correctly 2', () => {
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    const n3 = new TreeNode(3);
    const n4 = new TreeNode(4);
    const n5 = new TreeNode(5);
    const n6 = new TreeNode(6);
    const n7 = new TreeNode(7);

    n1.left = n2;
    n2.left = n3;
    n3.left = n4;
    n3.right = n5;
    n2.right = n6;
    n1.right = n7;

    expect(isBalanced(n1)).toEqual(false);
  });
});
