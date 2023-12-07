import { groupAnagrams, isAnagram } from './group-anagrams';

describe('Group Anagrams', () => {
  it('evaluates groupAnagrams correctly', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
      ['bat'],
      ['nat', 'tan'],
      ['ate', 'eat', 'tea'],
    ]);
    expect(groupAnagrams([''])).toEqual([['']]);
    expect(groupAnagrams(['a'])).toEqual([['a']]);
  });

  it('evaluates isAnagram correctly', () => {
    expect(isAnagram('tea', 'eat')).toEqual(true);
  });
});
