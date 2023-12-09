/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 1 <= prices.length <= 105
 * 0 <= prices[i] <= 104
 */
export function maxProfit(prices: number[]): number {
  let largest = -Infinity;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > largest) largest = profit;
    }
  }
  return largest > 0 ? largest : 0;
}
