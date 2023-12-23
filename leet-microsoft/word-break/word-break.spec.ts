import { wordBreak } from './word-break';

describe('Word Break', () => {
  it('evaluates correctly', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toEqual(true);
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toEqual(true);
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toEqual(false);
    // expect(wordBreak('cars', ['car', 'ca', 'rs'])).toEqual(true);
  });
});
