import { threeSumClosest } from './three-sum-closest';

describe('3Sum Closest', () => {
  it('evaluates correctly', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toEqual(2);
    expect(threeSumClosest([0, 0, 0], 1)).toEqual(0);
  });
});
