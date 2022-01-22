import { twoSumHash, twoSumBrute } from './two-sum';

test('brute version leetcode test', () => {
  expect(twoSumBrute([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSumBrute([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSumBrute([3, 3], 6)).toEqual([0, 1]);
});

test('hash version leetcode test', () => {
  expect(twoSumHash([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSumHash([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSumHash([3, 3], 6)).toEqual([0, 1]);
});
