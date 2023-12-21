import { getRow } from './pascals-triangle-ii';

describe("Pascal's Triangle II", () => {
  it('evaluates correctly', () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
    expect(getRow(0)).toEqual([1]);
    expect(getRow(1)).toEqual([1, 1]);
  });
});
