import { searchMatrix } from './search-a-2-d-matrix';

describe('Search a 2D Matrix', () => {
  it('evaluates correctly', () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        3
      )
    ).toEqual(true);

    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        13
      )
    ).toEqual(false);
  });
});
