import { multiply } from './multiply-strings';

describe('Multiply Strings', () => {
  it('evaluates correcty', () => {
    expect(multiply('2', '3')).toEqual('6');
    expect(multiply('123', '456')).toEqual('56088');
  });
});
