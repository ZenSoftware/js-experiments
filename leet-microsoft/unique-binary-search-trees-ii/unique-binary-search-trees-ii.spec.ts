import { generateTrees, TreeNode } from './unique-binary-search-trees-ii';

describe('Unique Binary Search Trees II', () => {
  it('evaluates correctly', () => {
    let n = 3;
    const result = generateTrees(n);
    for (let tree of result) {
      const vals = dfs(tree);
      expect(vals.length).toEqual(3);
      expect(allUnique(vals)).toEqual(true);
    }
    expect(result.length).toEqual(5);
  });
});

function dfs(tree: TreeNode | null) {
  let result: number[] = [];

  function search(tree: TreeNode | null) {
    if (!tree) return;
    if (tree.left) search(tree.left);
    if (tree.right) search(tree.right);
    result.push(tree.val);
  }

  search(tree);
  return result;
}

function allUnique(vals: number[]) {
  const cache: Record<string, true> = {};
  for (const val of vals) {
    if (cache[val]) return false;
    cache[val] = true;
  }
  return true;
}
