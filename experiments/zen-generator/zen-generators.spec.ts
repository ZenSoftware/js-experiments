import { zenG } from './zen-generator';

describe('zenG', () => {
  it('should yield correctly', () => {
    const result = [];

    for (const z of zenG(5)) {
      result.push(z);
    }

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
