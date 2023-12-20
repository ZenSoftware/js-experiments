import {
  buildTree,
  dfsInOrder,
  dfsPostOrder,
} from './construct-binary-tree-from-inorder-and-postorder-traversal';

describe('Construct Binary Tree from Inorder and Postorder Traversal', () => {
  it('evaluates correctly', () => {
    const inorder = [9, 3, 15, 20, 7];
    const postorder = [9, 15, 7, 20, 3];
    const result = buildTree(inorder, postorder);
    expect(dfsInOrder(result)).toEqual(inorder);
    expect(dfsPostOrder(result)).toEqual(postorder);
  });
});
