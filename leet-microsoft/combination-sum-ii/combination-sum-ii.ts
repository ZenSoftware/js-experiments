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
  let result: number[][] = [];

  function dfs(current: number[], sum: number, index: number) {
    if (sum === target) {
      result.push([...current]);
      return;
    }

    if (sum > target || index >= candidates.length) {
      return;
    }

    current.push(candidates[index]);
    sum += candidates[index];
    dfs(current, sum, index + 1);

    while (candidates[index] === candidates[index + 1]) {
      index++;
    }
    const last = current.pop() as number;
    sum -= last;
    dfs(current, sum, index + 1);
  }

  dfs([], 0, 0);
  return result;
}
