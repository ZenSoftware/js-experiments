import { numDecodings } from './decode-ways';

describe('Decode Ways', () => {
  it('evaluates correctly', () => {
    expect(numDecodings('12')).toEqual(2);
    expect(numDecodings('226')).toEqual(3);
    expect(numDecodings('06')).toEqual(0);
    expect(numDecodings('2101')).toEqual(1);
    // expect(numDecodings('111111111111111111111111111111111111111111111')).toEqual(88);
  });
});
