import { rotateRight, toArray, toList } from './rotate-list';

describe('Rotate List', () => {
  it('evaluates correctly 1', () => {
    const list = toList([1, 2, 3, 4, 5]);
    const result = rotateRight(list, 2);
    expect(toArray(result)).toEqual([4, 5, 1, 2, 3]);
  });

  it('evaluates correctly 2', () => {
    const list = toList([0, 1, 2]);
    const result = rotateRight(list, 4);
    expect(toArray(result)).toEqual([2, 0, 1]);
  });

  it('evaluates correctly 3', () => {
    const list = toList([1, 2, 3]);
    const result = rotateRight(list, 1);
    expect(toArray(result)).toEqual([3, 1, 2]);
  });
});
