import { removeDuplicates } from './remove-duplicates-from-sorted-array-ii';

describe('Remove Duplicates from Sorted Array II', () => {
  it('evaluates correctly', () => {
    const input = [1, 1, 1, 2, 2, 3];
    const solution = [1, 1, 2, 2, 3];
    const k = removeDuplicates(input);
    for (let i = 0; i < k; i++) {
      expect(input[i]).toEqual(solution[i]);
    }
  });

  it('evaluates correctly', () => {
    const input = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const solution = [0, 0, 1, 1, 2, 3, 3];
    const k = removeDuplicates(input);
    for (let i = 0; i < k; i++) {
      expect(input[i]).toEqual(solution[i]);
    }
  });
});
