/**
 * https://leetcode.com/problems/combination-sum-ii/
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations.
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 */

// Solution: https://leetcode.com/problems/combination-sum-ii/solutions/2922413/easy-to-understand-solution-beats-80-typescript/
export function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const result: number[][] = [];

  function dfs(cur: number[], idx: number, sum: number) {
    if (target === sum) {
      result.push([...cur]);
      return;
    }

    if (idx >= candidates.length || sum > target) {
      return;
    }

    cur.push(candidates[idx]);
    dfs(cur, idx + 1, sum + candidates[idx]);
    cur.pop();

    while (idx < candidates.length && candidates[idx] === candidates[idx + 1]) {
      idx++;
    }
    dfs(cur, idx + 1, sum);
  }

  dfs([], 0, 0);

  return result;
}
