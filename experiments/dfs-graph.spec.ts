import { dfs, v0 } from './dfs-graph';

describe('dfs', () => {
  it('evaluates correctly', () => {
    const result = dfs(v0);
    expect(result).toEqual([]);
  });
});
