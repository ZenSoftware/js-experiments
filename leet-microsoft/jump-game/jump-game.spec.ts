import { canJump } from './jump-game';

describe('Jump Game', () => {
  it('evaluates correctly', () => {
    expect(canJump([2, 3, 1, 1, 4])).toEqual(true);
    expect(canJump([3, 2, 1, 0, 4])).toEqual(false);
  });
});
