import { trap } from './trapping-rain-water';

describe('Trapping Rain Water', () => {
  it('evaluates correctly', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
    expect(trap([4, 2, 0, 3, 2, 5])).toEqual(9);
  });
});
