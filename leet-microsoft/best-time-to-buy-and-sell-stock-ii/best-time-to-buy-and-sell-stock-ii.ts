/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 * 1 <= prices.length <= 3 * 104
 * 0 <= prices[i] <= 104
 */
export function maxProfit(prices: number[]): number {
  let profit = 0;
  let l = 0;
  let r = 1;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      profit += prices[r] - prices[l];
      l++;
    } else {
      l = r;
    }
    r++;
  }
  return profit;
}
