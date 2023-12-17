import { generateTrees, TreeNode } from './unique-binary-search-trees-ii';

describe('Unique Binary Search Trees II', () => {
  it('evaluates correctly 1', () => {
    let n = 3;
    const result = generateTrees(n);
    expect(isValid(result, n)).toEqual(true);
    expect(result.length).toEqual(5);
  });

  it('evaluates correctly 2', () => {
    let n = 1;
    const result = generateTrees(n);
    expect(isValid(result, n)).toEqual(true);
    expect(result.length).toEqual(1);
  });

  it('evaluates correctly 3', () => {
    let n = 4;
    const result = generateTrees(n);
    expect(isValid(result, n)).toEqual(true);
    expect(result.length).toEqual(14);
  });
});

function isValid(result: (TreeNode | null)[], n) {
  for (let tree of result) {
    const vals = dfs(tree);
    if (vals.length !== n) return false;
    if (!allUnique(vals)) return false;
  }
  return true;
}

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
