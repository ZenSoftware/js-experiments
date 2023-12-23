/**
 * https://leetcode.com/problems/palindrome-partitioning/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
 * 1 <= s.length <= 16
 * s contains only lowercase English letters.
 */

export function partition(s: string): string[][] {
  const res: string[][] = [];
  const part: string[] = [];

  function dfs(i: number) {
    if (i >= s.length) {
      res.push([...part]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        part.push(s.substring(i, j + 1));
        dfs(j + 1);
        part.pop();
      }
    }
  }

  dfs(0);
  return res;
}

function isPalindrome(s: string, l: number, r: number) {
  while (l < r) {
    if (s.charAt(l) !== s.charAt(r)) {
      return false;
    }
    l++, r--;
  }
  return true;
}

console.log(partition('aab'));
