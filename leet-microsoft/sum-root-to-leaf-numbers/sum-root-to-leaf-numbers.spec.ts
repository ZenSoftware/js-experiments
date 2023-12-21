import { sumNumbers, TreeNode } from './sum-root-to-leaf-numbers';

describe('Sum Root to Leaf Numbers', () => {
  it('evaluates correctly', () => {
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    const n3 = new TreeNode(3);

    n1.left = n2;
    n1.right = n3;

    expect(sumNumbers(n1)).toEqual(25);
  });
});
