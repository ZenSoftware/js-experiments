import { combinationSum } from './combination-sum';

describe('Combination Sum', () => {
  it('evaluates correctly', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
    expect(combinationSum([2], 1)).toEqual([]);
  });
});
