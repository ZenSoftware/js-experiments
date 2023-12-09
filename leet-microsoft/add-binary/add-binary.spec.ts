import { addBinary } from './add-binary';

describe('Add Binary', () => {
  it('evaluates correctly', () => {
    expect(addBinary('11', '1')).toEqual('100');
    expect(addBinary('1010', '1011')).toEqual('10101');
    expect(addBinary('0', '0')).toEqual('0');
  });
});
