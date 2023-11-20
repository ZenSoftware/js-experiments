import { addTwoNumbers, toList, toArray } from './add-two-numbers';

describe('Two Sum', () => {
  it('constructs lists correctly', () => {
    const list = toList([1, 2, 3]);
    const array = toArray(list);
    expect(array).toEqual([1, 2, 3]);

    const list2 = toList([1]);
    const array2 = toArray(list2);
    expect(array2).toEqual([1]);
  });

  it('evaluates correctly', () => {});
});
