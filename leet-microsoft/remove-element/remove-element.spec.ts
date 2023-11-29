import { removeElement } from './remove-element';

describe('Remove Element', () => {
  it('evaluates correcty 1', () => {
    const nums = [3, 2, 2, 3];
    const result = removeElement(nums, 3);
    expect(result).toEqual(2);
    expect(nums).toEqual([2, 2, 3, 3]);
  });

  it('evaluates correcty 2', () => {
    const nums = [1];
    const result = removeElement(nums, 1);
    expect(result).toEqual(0);
  });

  it('evaluates correcty 3', () => {
    const nums = [1];
    const result = removeElement(nums, 2);
    expect(result).toEqual(1);
  });
});
