import { longestCommonPrefix } from './longest-common-prefix';

describe('Container With Most Water', () => {
  it('evaluates correctly', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  });
});
