import { groupAnagrams } from './group-anagrams';

describe('Group Anagrams', () => {
  it('evaluates groupAnagrams correctly', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    for (let r of result) {
      r.sort();
    }
    result.sort((a, b) => a.length - b.length);
    expect(result).toEqual([['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]);
    expect(groupAnagrams([''])).toEqual([['']]);
    expect(groupAnagrams(['a'])).toEqual([['a']]);
  });
});
