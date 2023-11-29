import { swapPairs, arrayToList, listToArray } from './swap-nodes-in-pairs';

describe('Swap Nodes in Pairs', () => {
  it('evaluates correctly 1', () => {
    const input = arrayToList([1, 2, 3, 4]);
    const result = swapPairs(input);
    expect(listToArray(result)).toEqual([2, 1, 4, 3]);
  });

  it('evaluates correctly 2', () => {
    const input = arrayToList([]);
    const result = swapPairs(input);
    expect(listToArray(result)).toEqual([]);
  });

  it('evaluates correctly 3', () => {
    const input = arrayToList([1]);
    const result = swapPairs(input);
    expect(listToArray(result)).toEqual([1]);
  });

  it('evaluates correctly 4', () => {
    const input = arrayToList([1, 2, 3]);
    const result = swapPairs(input);
    expect(listToArray(result)).toEqual([2, 1, 3]);
  });
});
