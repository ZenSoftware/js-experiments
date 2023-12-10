import { reverseBetween, toArray, toList } from './reverse-linked-list-ii';

describe('Reverse Linked List II', () => {
  it('evaluates correctly 1', () => {
    const list = toList([1, 2, 3, 4, 5]);
    const result = reverseBetween(list, 2, 4);
    expect(toArray(result)).toEqual([1, 4, 3, 2, 5]);
  });
});
