import { topKFrequent } from './top-k-frequent-elements';

describe('Top K Frequent Elements', () => {
  it('evaluates correctly', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(topKFrequent([1], 1)).toEqual([1]);
    expect(topKFrequent([-1, -1], 1)).toEqual([-1]);
  });
});
