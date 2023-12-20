import {
  buildTree,
  dfsPreorder,
  dfsInorder,
} from './construct-binary-tree-from-preorder-and-inorder-traversal';

describe('Construct Binary Tree from Preorder and Inorder Traversal', () => {
  it('evaluates correctly', () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];
    const result = buildTree(preorder, inorder);
    expect(dfsPreorder(result)).toEqual(preorder);
    expect(dfsInorder(result)).toEqual(inorder);
  });
});
