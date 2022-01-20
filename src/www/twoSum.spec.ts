import { hashVer } from './twoSum';

test('should find match', () => {
  expect(hashVer([6, 2, 3], 5)).toEqual([1, 2]);
});
