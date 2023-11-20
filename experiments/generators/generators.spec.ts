import { yieldDeligate, getId } from './generators';

describe('generators', () => {
  it('delegates yield', () => {
    expect([...yieldDeligate(5)]).toEqual([1, 2, 3, 4, 5, 8, 9]);
  });

  it('manually yields', () => {
    const iter = getId();
    expect(iter.next().value).toEqual(1);
    expect(iter.next(5).value).toEqual(7);
    expect(iter.next().value).toEqual(8);
    expect(iter.next().value).toEqual(9);
  });
});
