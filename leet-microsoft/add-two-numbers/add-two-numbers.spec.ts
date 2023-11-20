import { addTwoNumbers, toList, toArray, ListNode } from './add-two-numbers';

describe('Two Sum', () => {
  it('constructs lists correctly', () => {
    const list1 = toList([1, 2, 3]);
    const array1 = toArray(list1);
    expect(array1).toEqual([1, 2, 3]);

    const list2 = toList([1]);
    const array2 = toArray(list2);
    expect(array2).toEqual([1]);

    const list3 = toList([7, 0, 8]);
    const array3 = toArray(list3);
    expect(array3).toEqual([7, 0, 8]);
  });

  it('evaluates example 1 correctly', () => {
    const listA = toList([2, 4, 3]);
    const listB = toList([5, 6, 4]);
    const result = addTwoNumbers(listA, listB) as ListNode;
    expect(toArray(result)).toEqual([7, 0, 8]);
  });

  it('evaluates example 2 correctly', () => {
    const listA = toList([0]);
    const listB = toList([0]);
    const result = addTwoNumbers(listA, listB) as ListNode;
    expect(toArray(result)).toEqual([0]);
  });

  it('evaluates example 3 correctly', () => {
    const listA = toList([9, 9, 9, 9, 9, 9, 9]);
    const listB = toList([9, 9, 9, 9]);
    const result = addTwoNumbers(listA, listB) as ListNode;
    expect(toArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
