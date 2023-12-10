import { subsetsWithDup } from './subsets-ii';

describe('Subsets II', () => {
  it('evaluates correctly', () => {
    expect(subsetsWithDup([1, 2, 2])).toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]);
    expect(subsetsWithDup([0])).toEqual([[], [0]]);
  });
});
