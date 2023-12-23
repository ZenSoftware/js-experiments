import { wordBreak } from './word-break-ii';

describe('Word Break II', () => {
  it('evaluates correctly', () => {
    expect(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog'])).toEqual([
      'cats and dog',
      'cat sand dog',
    ]);

    expect(
      wordBreak('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple'])
    ).toEqual(['pine apple pen apple', 'pineapple pen apple', 'pine applepen apple']);

    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toEqual([]);
  });
});
