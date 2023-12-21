import { hasPathSum, TreeNode } from './path-sum';

describe('Path Sum', () => {
  it('evaluates correctly 1', () => {
    const n5 = new TreeNode(5);
    const n4 = new TreeNode(4);
    const n11 = new TreeNode(11);
    const n7 = new TreeNode(7);
    const n2 = new TreeNode(2);
    const n8 = new TreeNode(8);
    const n13 = new TreeNode(13);
    const n4_2 = new TreeNode(4);
    const n1 = new TreeNode(1);

    n5.left = n4;
    n5.right = n8;
    n4.left = n11;
    n11.left = n7;
    n11.right = n2;
    n8.left = n13;
    n8.right = n4_2;
    n4_2.right = n1;

    expect(hasPathSum(n5, 22)).toEqual(true);
    expect(hasPathSum(n5, 34)).toEqual(false);
  });

  it('evaluates correctly 2', () => {
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);

    n1.left = n2;

    expect(hasPathSum(n1, 1)).toEqual(false);
  });
});
