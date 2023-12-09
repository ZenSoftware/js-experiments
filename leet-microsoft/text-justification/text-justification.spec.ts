import { fullJustify } from './text-justification2';

describe('', () => {
  it('evaluates correctly', () => {
    expect(
      fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16)
    ).toEqual(['This    is    an', 'example  of text', 'justification.  ']);

    expect(fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16)).toEqual([
      'What   must   be',
      'acknowledgment  ',
      'shall be        ',
    ]);

    expect(
      fullJustify(
        [
          'Science',
          'is',
          'what',
          'we',
          'understand',
          'well',
          'enough',
          'to',
          'explain',
          'to',
          'a',
          'computer.',
          'Art',
          'is',
          'everything',
          'else',
          'we',
          'do',
        ],
        20
      )
    ).toEqual([
      'Science  is  what we',
      'understand      well',
      'enough   to  explain',
      'to  a  computer. Art',
      'is  everything  else',
      'we do               ',
    ]);
  });
});
