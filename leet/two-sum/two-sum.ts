/** https://leetcode.com/problems/two-sum/ */

/** Time O(n^2) | Space O(1) */
export function twoSumBrute(nums: number[], target: number): number[] | void {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

/** Time O(n) | Space O(n) */
export function twoSumHash(nums: number[], target: number): number[] | void {
  const dict: Record<number, number> = {};

  for (let [index, val] of nums.entries()) {
    const lookupIndex = dict[target - val];
    if (lookupIndex !== undefined) return [lookupIndex, index];
    dict[val] = index;
  }
}
