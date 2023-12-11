import { isInterleave } from './interleaving-string';

describe('Interleaving String', () => {
  it('evaluates correctly', () => {
    expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toEqual(true);
    expect(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')).toEqual(false);
    expect(isInterleave('', '', '')).toEqual(false);
  });
});
