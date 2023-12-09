import { uniquePathsWithObstacles } from './unique-paths-ii';

describe('Unique Paths II', () => {
  it('evaluates correctly', () => {
    expect(
      uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    ).toEqual(2);

    expect(
      uniquePathsWithObstacles([
        [0, 0],
        [0, 1],
      ])
    ).toEqual(0);
  });
});
