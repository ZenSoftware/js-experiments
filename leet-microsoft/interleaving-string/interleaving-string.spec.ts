import { isInterleave } from './interleaving-string';

describe('Interleaving String', () => {
  it('evaluates correctly', () => {
    expect(isInterleave('aa', 'b', 'aba')).toEqual(true);
    expect(isInterleave('a', 'b', 'cb')).toEqual(false);
    expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toEqual(true);
    expect(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')).toEqual(false);
    expect(isInterleave('', '', '')).toEqual(true);
    expect(
      isInterleave(
        'cbcccbabbccbbcccbbbcabbbabcababbbbbbaccaccbabbaacbaabbbc',
        'abcbbcaababccacbaaaccbabaabbaaabcbababbcccbbabbbcbbb',
        'abcbcccbacbbbbccbcbcacacbbbbacabbbabbcacbcaabcbaaacbcbbbabbbaacacbbaaaabccbcbaabbbaaabbcccbcbabababbbcbbbcbb'
      )
    ).toEqual(true);
  });
});
