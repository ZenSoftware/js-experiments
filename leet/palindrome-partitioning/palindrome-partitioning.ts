/**
 * https://leetcode.com/problems/palindrome-partitioning/
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 *
 * A palindrome string is a string that reads the same backward as forward.
 */

function partition(s: string): string[][] {
  const result = [];
  dfs(0, result, [], s);
  return result;
}

function dfs(start: number, result: string[][], currentList: string[], s: string) {
  if (start >= s.length) result.push([...currentList]);
  for (let end = start; end < s.length; end++) {
    if (isPalindrome(s, start, end)) {
      // add current substring in the currentList
      currentList.push(s.substring(start, end + 1));
      dfs(end + 1, result, currentList, s);
      // backtrack and remove the current substring from currentList
      currentList.pop();
    }
  }
}

function isPalindrome(s: string, low: number, high: number) {
  while (low < high) {
    if (s.charAt(low++) !== s.charAt(high--)) return false;
  }
  return true;
}

console.log(partition('bacab'));
