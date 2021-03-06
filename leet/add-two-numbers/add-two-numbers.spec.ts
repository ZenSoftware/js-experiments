import { addTwoNumbers, getList, getArray } from './add-two-numbers';

test('leetcode test 1', () => {
  const l1 = getList([9, 9, 9, 9, 9, 9, 9]);
  const l2 = getList([9, 9, 9, 9]);
  const result = addTwoNumbers(l1, l2);
  expect(getArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});

test('leetcode test 2', () => {
  const l1 = getList([2, 4, 3]);
  const l2 = getList([5, 6, 4]);
  const result = addTwoNumbers(l1, l2);
  expect(getArray(result)).toEqual([7, 0, 8]);
});

test('leetcode test 3', () => {
  const l1 = getList([0]);
  const l2 = getList([0]);
  const result = addTwoNumbers(l1, l2);
  expect(getArray(result)).toEqual([0]);
});

test('leetcode test 4', () => {
  const l1 = getList([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ]);
  const l2 = getList([5, 6, 4]);
  const result = addTwoNumbers(l1, l2);
  expect(getArray(result)).toEqual([
    6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ]);
});
