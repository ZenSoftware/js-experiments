import { restoreIpAddresses } from './restore-ip-addresses';

describe('Restore IP Addresses', () => {
  it('evaluates correctly', () => {
    expect(restoreIpAddresses('25525511135')).toEqual(['255.255.11.135', '255.255.111.35']);
    expect(restoreIpAddresses('0000')).toEqual(['0.0.0.0']);
    expect(restoreIpAddresses('101023')).toEqual([
      '1.0.10.23',
      '1.0.102.3',
      '10.1.0.23',
      '10.10.2.3',
      '101.0.2.3',
    ]);
  });
});
