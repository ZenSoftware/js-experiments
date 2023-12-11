import { generateTrees } from './unique-binary-search-trees-ii';

describe('Unique Binary Search Trees II', () => {
  it('evaluates correctly', () => {
    const result = generateTrees(3);
    expect(result.length).toEqual(5);
  });
});
