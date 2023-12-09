import { simplifyPath } from './simplify-path';

describe('Simplify Path', () => {
  it('evaluates correctly', () => {
    // expect(simplifyPath('/home/')).toEqual('/home');
    // expect(simplifyPath('/../')).toEqual('/');
    // expect(simplifyPath('/home//foo/')).toEqual('/home/foo');
    // expect(simplifyPath('/a/./b/../../c/')).toEqual('/c');
    // expect(simplifyPath('/a/../../b/../c//.//')).toEqual('/c');
    // expect(simplifyPath('/a//b////c/d//././/..')).toEqual('/a/b/c');
    expect(simplifyPath('/.././em/jl///../.././../E/')).toEqual('/E');
  });
});
