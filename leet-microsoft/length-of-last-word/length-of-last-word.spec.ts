import { lengthOfLastWord } from './length-of-last-word';

describe('Length of Last Word', () => {
  it('evaluates correctly', () => {
    expect(lengthOfLastWord('Hello World')).toEqual(5);
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toEqual(4);
    expect(lengthOfLastWord('luffy is still joyboy')).toEqual(6);
  });
});
