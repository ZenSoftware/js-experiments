import { flatten, TreeNode } from './flatten-binary-tree-to-linked-list';

describe('Flatten Binary Tree to Linked List', () => {
  it('evaluates right traverse correctly', () => {
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    const n3 = new TreeNode(3);
    const n4 = new TreeNode(4);
    const n5 = new TreeNode(5);
    const n6 = new TreeNode(6);
    const n7 = new TreeNode(7);

    n1.right = n2;
    n1.left = n7;
    n2.right = n3;
    n3.right = n4;
    n4.right = n5;
    n5.right = n6;

    expect(rightTraverse(n1)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('evaluates correctly 1', () => {
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    const n3 = new TreeNode(3);
    const n4 = new TreeNode(4);
    const n5 = new TreeNode(5);
    const n6 = new TreeNode(6);

    n1.left = n2;
    n2.left = n3;
    n2.right = n4;
    n1.right = n5;
    n5.right = n6;

    flatten(n1);
    expect(rightTraverse(n1)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

function rightTraverse(root: TreeNode | null) {
  if (!root) return [];
  const result: number[] = [];
  let pointer: TreeNode | null = root;
  while (pointer) {
    result.push(pointer.val);
    pointer = pointer.right;
  }
  return result;
}
