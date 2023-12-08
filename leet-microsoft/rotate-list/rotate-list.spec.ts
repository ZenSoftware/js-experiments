import { rotateRight, toArray, toList } from './rotate-list';

describe('Rotate List', () => {
  it('evaluates correctly', () => {
    const list = toList([1, 2, 3, 4, 5]);
    const result = rotateRight(list, 2);
    expect(toArray(result)).toEqual([4, 5, 1, 2, 3]);
  });

  it('evaluates correctly', () => {
    const list = toList([0, 1, 2]);
    const result = rotateRight(list, 4);
    expect(toArray(result)).toEqual([2, 0, 1]);
  });
});
