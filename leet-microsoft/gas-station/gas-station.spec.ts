import { canCompleteCircuit } from './gas-station';

describe('Gas Station', () => {
  it('evaluates correctly', () => {
    expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toEqual(3);
    expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toEqual(-1);
  });
});
