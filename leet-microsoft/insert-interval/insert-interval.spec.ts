import { insert } from './insert-interval';

describe('Insert Interval', () => {
  it('evaluates correctly', () => {
    expect(
      insert(
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5]
      )
    ).toEqual([
      [1, 5],
      [6, 9],
    ]);

    expect(
      insert(
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8]
      )
    ).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ]);
  });
});
