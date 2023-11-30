/**
 * https://leetcode.com/problems/combination-sum-ii/
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations.
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 */
export function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const combinations = getCombinations(candidates);

  for (let comb of combinations) {
    const sum = comb.reduce((accum, next) => accum + next, 0);
    if (sum === target) result.push(comb);
  }

  result.forEach(r => r.sort((a, b) => a - b));
  return deduplicate(result);
}

function deduplicate(result: number[][]) {
  const hash: Record<string, number[]> = {};

  for (let r of result) {
    const key = r.reduce((accum, curr) => (accum += curr), '');
    if (!hash[key]) hash[key] = r;
  }

  return Object.values(hash);
}

function getCombinations(entries: number[]): number[][] {
  if (entries.length === 0) return [[]];

  const firstEnt = entries[0];
  const rest = entries.slice(1);
  const combsWithoutFirst = getCombinations(rest);
  const combsWithFirst: number[][] = [];

  for (let comb of combsWithoutFirst) {
    const withFirst = [firstEnt, ...comb];
    combsWithFirst.push(withFirst);
  }

  return [...combsWithoutFirst, ...combsWithFirst];
}
