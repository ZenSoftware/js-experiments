import { numIslands } from './number-of-islands';

describe('Number of Islands', () => {
  it('evaluates correctly', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];
    expect(numIslands(grid)).toEqual(1);

    const grid2 = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    expect(numIslands(grid2)).toEqual(3);
  });
});
