import { isValidBST, TreeNode } from './validate-binary-search-tree';

describe('Validate Binary Search Tree', () => {
  it('evaluates correctly 1', () => {
    const v1 = new TreeNode(1);
    const v3 = new TreeNode(3);
    const v4 = new TreeNode(4);
    const v5 = new TreeNode(5);
    const v6 = new TreeNode(6);
    v5.left = v1;
    v5.right = v4;
    v4.left = v3;
    v4.right = v6;
    const root = v5;

    expect(isValidBST(root)).toEqual(false);
  });

  it('evaluates correctly 2', () => {
    const v1 = new TreeNode(1);
    const v3 = new TreeNode(3);
    const v5 = new TreeNode(5);
    const v6 = new TreeNode(6);
    const v7 = new TreeNode(7);
    v5.left = v1;
    v5.right = v6;
    v6.left = v3;
    v6.right = v7;
    const root = v5;

    expect(isValidBST(root)).toEqual(true);
  });
});
