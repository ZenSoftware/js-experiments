/**
 * https://leetcode.com/problems/combination-sum/
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 *
 * 1 <= candidates.length <= 30
 * 2 <= candidates[i] <= 40
 * All elements of candidates are distinct.
 * 1 <= target <= 40
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  function backtrack(curSum: number[]) {
    const sum = curSum.reduce((prev, cur) => prev + cur, 0);

    if (sum === target) {
      if (!exists(ans, curSum)) ans.push(curSum);
      return;
    } else if (sum > target) {
      return;
    }

    for (let candidate of candidates) {
      backtrack([...curSum, candidate]);
    }
  }

  backtrack([]);

  return ans;
}

function exists(ans: number[][], sum: number[]) {
  sum.sort((a, b) => a - b);
  for (const a of ans) {
    if (arraysEqual(a, sum)) return true;
  }
  return false;
}

function arraysEqual(a: number[], b: number[]) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
  } else return false;

  return true;
}
