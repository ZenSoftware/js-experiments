import { compose, pipe } from './pipe-compose';

describe('pipe & compose', () => {
  it('executes left to right', () => {
    const add5 = x => x + 5;
    const multiply2 = x => x * 2;
    const subtract1 = x => x - 1;

    const result = compose(add5, multiply2, subtract1)(3);
    expect(result).toEqual(9);
  });

  it('executes right to left', () => {
    const add5 = x => x + 5;
    const multiply2 = x => x * 2;
    const subtract1 = x => x - 1;

    const result = pipe(add5, multiply2, subtract1)(3);
    expect(result).toEqual(15);
  });
});
