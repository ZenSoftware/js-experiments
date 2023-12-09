import { fullJustify } from './text-justification2';

describe('', () => {
  it('evaluates correctly', () => {
    expect(
      fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16)
    ).toEqual(['This    is    an', 'example  of text', 'justification.  ']);
  });
});
