/**
 * https://leetcode.com/problems/climbing-stairs/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 1 <= n <= 45
 */

export function climbStairs(n: number): number {
  const memo: Record<number, number> = {};

  function dfs(current: number): number {
    if (memo[current] !== undefined) return memo[current];
    if (current > n) return 0;
    if (current === n) return 1;
    let count = 0;
    count += dfs(1 + current);
    count += dfs(2 + current);
    memo[current] = count;
    return count;
  }

  return dfs(0);
}
