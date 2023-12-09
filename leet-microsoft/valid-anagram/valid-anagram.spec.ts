import { isAnagram } from './valid-anagram';

describe('Valid Anagram', () => {
  it('evaluates correctly', () => {
    expect(isAnagram('anagram', 'nagaram')).toEqual(true);
    expect(isAnagram('rat', 'car')).toEqual(false);
  });
});
