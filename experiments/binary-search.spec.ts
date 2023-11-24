import { binarySearch } from './binary-search';

describe('binarySearch', () => {
  it('works', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch(array, 34)).toEqual(-1);
    expect(binarySearch(array, 1)).toEqual(0);
    expect(binarySearch(array, 2)).toEqual(1);
    expect(binarySearch(array, 3)).toEqual(2);
    expect(binarySearch(array, 4)).toEqual(3);
    expect(binarySearch(array, 5)).toEqual(4);
    expect(binarySearch(array, 6)).toEqual(5);
    expect(binarySearch(array, 7)).toEqual(6);
    expect(binarySearch(array, 8)).toEqual(7);
    expect(binarySearch(array, 9)).toEqual(8);
  });
});
