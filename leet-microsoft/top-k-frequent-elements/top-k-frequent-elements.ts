/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 */
export function topKFrequent(nums: number[], k: number): number[] {
  const hash = new Map<number, number>();

  for (let num of nums) {
    const count = hash.get(num);
    if (count === undefined) hash.set(num, 1);
    else hash.set(num, count + 1);
  }

  return Array.from(hash.entries())
    .sort((a, b) => a[1] - b[1])
    .map(e => e[0])
    .sort((a, b) => a - b)
    .slice(0, k);
}
