import { TreeNode, pathSum } from './path-sum-ii';

describe('Path Sum II', () => {
  it('evaluates correctly', () => {
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

    expect(pathSum(n5, 22)).toEqual([
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ]);
  });
});
