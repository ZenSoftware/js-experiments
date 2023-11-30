import { searchInsert } from './search-insert-position';

describe('Search Insert Position', () => {
  it('evaluates correctly', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
    expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
    expect(searchInsert([1, 3], 0)).toEqual(0);
    expect(searchInsert([1, 3], 2)).toEqual(1);
  });
});
