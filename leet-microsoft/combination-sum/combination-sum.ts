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
  const result: number[][] = [];

  function dfs(index: number, sum: number, path: number[]) {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    // if sum is greater than target
    // or index is eqaul to length of nums
    // then we know that the path we are going in is wrong, so stop
    if (sum > target || index === candidates.length) return;

    // retake current element
    sum = sum + candidates[index];
    path.push(candidates[index]);
    dfs(index, sum, path);

    // exclude current element
    path.pop();
    sum = sum - candidates[index];
    dfs(index + 1, sum, path);
  }

  dfs(0, 0, []);
  return result;
}
