import { convert } from './zigzag-conversion';

describe('zigzag-conversion', () => {
  it('converts correctly', () => {
    expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
    expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
  });
});
