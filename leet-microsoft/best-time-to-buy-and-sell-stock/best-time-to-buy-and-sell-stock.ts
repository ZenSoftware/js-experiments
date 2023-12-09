/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 1 <= prices.length <= 105
 * 0 <= prices[i] <= 104
 */
export function maxProfit(prices: number[]): number {
  let left = 0;
  let right = 1;
  let largest = -Infinity;
  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    if (profit > largest) largest = profit;
    if (prices[right] < prices[left]) left = right;
    right++;
  }
  return largest > 0 ? largest : 0;
}
