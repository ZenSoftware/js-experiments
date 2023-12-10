import { invertTree, TreeNode, bfsArray } from './invert-binary-tree';

describe('Invert Binary Tree', () => {
  it('evaluates correctly', () => {
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    const n3 = new TreeNode(3);
    const n4 = new TreeNode(4);
    const n6 = new TreeNode(6);
    const n7 = new TreeNode(7);
    const n9 = new TreeNode(9);
    n4.left = n2;
    n4.right = n7;
    n2.left = n1;
    n2.right = n3;
    n7.left = n6;
    n7.right = n9;
    const root = n4;
    invertTree(root);
    expect(bfsArray(root)).toEqual([4, 7, 2, 9, 6, 3, 1]);
  });
});
