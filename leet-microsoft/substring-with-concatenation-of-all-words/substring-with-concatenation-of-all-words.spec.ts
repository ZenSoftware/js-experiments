import { findSubstring, permutations } from './substring-with-concatenation-of-all-words';

describe('Reverse Integer', () => {
  it('evaluates permutations correctly', () => {
    const perms = permutations(['ab', 'cd', 'ef']).sort();
    expect(perms).toEqual(['abcdef', 'abefcd', 'cdabef', 'cdefab', 'efabcd', 'efcdab']);
  });

  it('evaluates findSubstring correctly', () => {
    expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9]);
    expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([]);
    expect(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])).toEqual([6, 9, 12]);
    expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])).toEqual([
      8,
    ]);
  });

  it('passes stress test', () => {
    expect(
      findSubstring(
        'pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoyb',
        [
          'dhvf',
          'sind',
          'ffsl',
          'yekr',
          'zwzq',
          'kpeo',
          'cila',
          'tfty',
          'modg',
          'ztjg',
          'ybty',
          'heqg',
          'cpwo',
          'gdcj',
          'lnle',
          'sefg',
          'vimw',
          'bxcb',
        ]
      )
    ).toEqual([]);
  });

  it('permutations passes stress test', () => {
    expect(
      permutations([
        'dhvf',
        'sind',
        'ffsl',
        'yekr',
        'zwzq',
        'kpeo',
        'cila',
        'tfty',
        'modg',
        'ztjg',
        'ybty',
        'heqg',
        'cpwo',
        'gdcj',
        'lnle',
        'sefg',
        'vimw',
        'bxcb',
      ])
    ).toEqual([]);
  });
});
