import { removeDuplicates } from './remove-duplicates-from-sorted-array-ii';

describe('Remove Duplicates from Sorted Array II', () => {
  it('evaluates correctly 1', () => {
    const input = [1, 1, 1, 2, 2];
    const solution = [1, 1, 2, 2];
    const k = removeDuplicates(input);
    expect(k).toEqual(4);
    for (let i = 0; i < k; i++) {
      expect(input[i]).toEqual(solution[i]);
    }
  });

  it('evaluates correctly 2', () => {
    const input = [1, 1, 1, 2, 2, 3];
    const solution = [1, 1, 2, 2, 3];
    const k = removeDuplicates(input);
    expect(k).toEqual(5);
    for (let i = 0; i < k; i++) {
      expect(input[i]).toEqual(solution[i]);
    }
  });

  it('evaluates correctly 3', () => {
    const input = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const solution = [0, 0, 1, 1, 2, 3, 3];
    const k = removeDuplicates(input);
    expect(k).toEqual(7);
    for (let i = 0; i < k; i++) {
      expect(input[i]).toEqual(solution[i]);
    }
  });
});
