import { sortedListToBST, toArray, toList } from './convert-sorted-list-to-binary-search-tree';

describe('Convert Sorted List to Binary Search Tree', () => {
  it('evaluates correctly', () => {
    const head = toList([-10, -3, 0, 5, 9]);
    const result = sortedListToBST(head);
    // expect().toEqual();
  });
});
