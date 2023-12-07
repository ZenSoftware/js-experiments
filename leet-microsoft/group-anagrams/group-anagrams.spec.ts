import { groupAnagrams } from './group-anagrams';

describe('Group Anagrams', () => {
  it('evaluates correctly', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
      ['bat'],
      ['nat', 'tan'],
      ['ate', 'eat', 'tea'],
    ]);
    expect(groupAnagrams([''])).toEqual([['']]);
    expect(groupAnagrams(['a'])).toEqual([['a']]);
  });
});
