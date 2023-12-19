import { isSymmetric, TreeNode } from './symmetric-tree';

describe('Symmetric Tree', () => {
  it('evaluates correctly 1', () => {
    const r1 = new TreeNode(1);
    const l2 = new TreeNode(2);
    const r2 = new TreeNode(2);
    const l3 = new TreeNode(3);
    const r4 = new TreeNode(4);
    const l4 = new TreeNode(4);
    const r3 = new TreeNode(3);

    r1.left = l2;
    r1.right = r2;
    l2.left = l3;
    l2.right = r4;
    r2.left = l4;
    r2.right = r3;

    expect(isSymmetric(r1)).toEqual(true);
  });

  it('evaluates correctly 2', () => {
    const r1 = new TreeNode(1);
    const n_1_2 = new TreeNode(2);
    const n_2_2 = new TreeNode(2);
    const n_1_3 = new TreeNode(3);
    const n_2_3 = new TreeNode(3);

    r1.left = n_1_2;
    r1.right = n_2_2;
    n_1_2.right = n_1_3;
    n_2_2.right = n_2_3;

    expect(isSymmetric(r1)).toEqual(false);
  });
});
