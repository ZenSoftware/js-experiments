import { merge } from './merge-intervals';

describe('Merge Intervals', () => {
  it('evaluates correctly', () => {
    // expect(
    //   merge([
    //     [1, 3],
    //     [2, 6],
    //     [8, 10],
    //     [15, 18],
    //   ])
    // ).toEqual([
    //   [1, 6],
    //   [8, 10],
    //   [15, 18],
    // ]);

    // expect(
    //   merge([
    //     [1, 4],
    //     [4, 5],
    //   ])
    // ).toEqual([[1, 5]]);

    expect(
      merge([
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 9],
        [1, 10],
      ])
    ).toEqual([[1, 10]]);
  });
});
