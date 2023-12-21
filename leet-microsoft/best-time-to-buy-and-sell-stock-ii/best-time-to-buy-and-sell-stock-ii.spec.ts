import { maxProfit } from './best-time-to-buy-and-sell-stock-ii';

describe('Best Time to Buy and Sell Stock II', () => {
  it('evaluates correctly', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
    // expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
    // expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
});
