/**
 * https://leetcode.com/problems/palindrome-partitioning/
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 *
 * A palindrome string is a string that reads the same backward as forward.
 */

export function partition(s: string): string[][] {
  const results: string[][] = [];
  const current: string[] = [];

  let dfs = (start: number) => {
    if (start >= s.length) {
      results.push([...current]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      const strToEval = s.substring(start, end + 1);
      if (isPalindrome(strToEval)) {
        current.push(strToEval);
        dfs(end + 1);
        current.pop();
      }
    }
  };

  dfs(0);
  return results;
}

export function isPalindrome(str: string) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str.charAt(start++) !== str.charAt(end--)) {
      return false;
    }
  }
  return true;
}

console.log(partition('ababa'));
