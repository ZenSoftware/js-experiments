import { minDistance } from './edit-distance';

describe('Edit Distance', () => {
  it('evaluates correctly', () => {
    expect(minDistance('horse', 'ros')).toEqual(3);
    expect(minDistance('intention', 'execution')).toEqual(5);
  });
});
