import { yieldDeligate, getId } from './generators';

describe('generators', () => {
  it('should yield correctly', () => {
    expect([...yieldDeligate(5)]).toEqual([1, 2, 3, 4, 5, 8, 9]);
  });

  it('should yield ids', () => {
    const itter = getId();
    expect(itter.next().value).toEqual(1);
    expect(itter.next(5).value).toEqual(7);
    expect(itter.next().value).toEqual(8);
    expect(itter.next().value).toEqual(9);
  });
});
