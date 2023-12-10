import { numDecodings } from './decode-ways';

describe('Decode Ways', () => {
  it('evaluates correctly', () => {
    expect(numDecodings('12')).toEqual(2);
    expect(numDecodings('226')).toEqual(3);
    expect(numDecodings('06')).toEqual(0);
  });
});
