import { isSymmetric, TreeNode, bfsRightFirst } from './symmetric-tree';

describe('Symmetric Tree', () => {
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

  it('constructs tree correctly', () => {
    const values = bfsRightFirst(r1);
    expect(values).toEqual([1, 2, 3, 4, 2, 4, 3]);
  });

  it('evaluates correctly 1', () => {
    expect(isSymmetric(r1)).toEqual(true);
  });
});
