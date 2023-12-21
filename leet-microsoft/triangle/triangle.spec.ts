import { minimumTotal } from './triangle';

describe('Triangle', () => {
  it('evaluates correctly', () => {
    expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toEqual(11);
    expect(minimumTotal([[-10]])).toEqual(-10);
    expect(minimumTotal([[-1], [2, 3], [1, -1, -3]])).toEqual(-1);
  });
});
