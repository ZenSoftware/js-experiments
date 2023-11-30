import { countAndSay } from './count-and-say';

describe('Container With Most Water', () => {
  it('evaluates correctly', () => {
    expect(countAndSay(1)).toEqual('1');
    expect(countAndSay(4)).toEqual('1211');
  });
});
