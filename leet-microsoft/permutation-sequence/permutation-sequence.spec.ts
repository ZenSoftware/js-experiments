import { getPermutation } from './permutation-sequence';

describe('Permutation Sequence', () => {
  it('evaluates correctly', () => {
    expect(getPermutation(3, 3)).toEqual('213');
    expect(getPermutation(4, 9)).toEqual('2314');
    expect(getPermutation(3, 1)).toEqual('123');
  });
});
