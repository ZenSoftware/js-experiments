/**
 * https://leetcode.com/problems/palindrome-partitioning/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
 * 1 <= s.length <= 16
 * s contains only lowercase English letters.
 */

export function partition(s: string): string[][] {
  function perm(elements: string[]): string[][] {
    if (elements.length === 0) return [[]];

    const firstEl = elements[0];
    const withoutFirst = elements.slice(1);
    const permsWithoutFirst = perm(withoutFirst);
    const result: string[][] = [];

    for (let perm of permsWithoutFirst) {
      for (let i = 0; i <= perm.length; i++)
        result.push([...perm.slice(0, i), firstEl, ...perm.slice(i)]);
    }

    return result;
  }

  return perm(s.split(''));
}

console.log(partition('abc'));
