/**
 * https://leetcode.com/problems/subsets-ii/
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 */
export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let result: number[][] = [];

  function backtrack(index: number, cur: number[]) {
    if (index >= nums.length) {
      result.push([...cur]);
      return;
    }

    let num = nums[index];

    cur.push(num);
    backtrack(index + 1, cur);

    while (nums[index + 1] === num) {
      index++;
    }

    cur.pop();
    backtrack(index + 1, cur);
  }

  backtrack(0, []);
  return result;
}
