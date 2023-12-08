/**
 * https://leetcode.com/problems/permutation-sequence/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
 * Given n and k, return the kth permutation sequence.
 * 1 <= n <= 9
 * 1 <= k <= n!
 */

export function getPermutation(n: number, k: number): string {
  function perms(elements: number[]) {
    if (elements.length === 0) return [[]];

    let firstEl = elements[0];
    let rest = elements.slice(1);
    let permsWithoutFirst = perms(rest);
    let result: number[][] = [];

    for (let perm of permsWithoutFirst) {
      for (let i = 0; i <= perm.length; i++) {
        const withFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
        result.push(withFirst);
      }
    }

    return result;
  }

  const nums: number[] = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  const allPerms = perms(nums);
  allPerms.sort((a, b) => {
    let result = 0;
    for (let i = 0; i < n; i++) {
      result = result || a[i] - b[i];
    }
    return result;
  });

  return allPerms[k - 1].reduce((accum, curr) => (accum += curr.toString()), '');
}
