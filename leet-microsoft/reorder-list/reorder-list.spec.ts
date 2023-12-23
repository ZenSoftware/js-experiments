import { reorderList, toArray, toList } from './reorder-list';

describe('Reorder List', () => {
  it('evaluates correctly 1', () => {
    const root = toList([1, 2, 3, 4]);
    reorderList(root);
    expect(toArray(root)).toEqual([1, 4, 2, 3]);
  });

  it('evaluates correctly 2', () => {
    const root = toList([1, 2, 3, 4, 5]);
    reorderList(root);
    expect(toArray(root)).toEqual([1, 5, 2, 4, 3]);
  });
});
