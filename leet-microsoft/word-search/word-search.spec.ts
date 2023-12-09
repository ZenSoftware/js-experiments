import { exist } from './word-search';

describe('Word Search', () => {
  it('evaluates correctly', () => {
    expect(
      exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCCED'
      )
    ).toEqual(true);

    expect(
      exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'SEE'
      )
    ).toEqual(true);

    expect(
      exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E'],
        ],
        'ABCB'
      )
    ).toEqual(false);

    expect(
      exist(
        [
          ['A', 'A', 'A', 'A', 'A', 'A'],
          ['A', 'A', 'A', 'A', 'A', 'A'],
          ['A', 'A', 'A', 'A', 'A', 'A'],
          ['A', 'A', 'A', 'A', 'A', 'A'],
          ['A', 'A', 'A', 'A', 'A', 'A'],
          ['A', 'A', 'A', 'A', 'A', 'A'],
        ],
        'AAAAAAAAAAAAAAB'
      )
    ).toEqual(false);
  });
});
