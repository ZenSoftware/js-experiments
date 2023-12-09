import { search } from './search-in-rotated-sorted-array-ii';

describe('Search in Rotated Sorted Array II', () => {
  it('evaluates correctly', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toEqual(true);
    expect(search([2, 5, 6, 0, 0, 1, 2], 3)).toEqual(false);
  });
});
