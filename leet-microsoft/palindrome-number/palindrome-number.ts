/**
 * https://leetcode.com/problems/palindrome-number/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

export function isPalindrome(x: number): boolean {
  const evaluate = x.toString();

  let start = 0;
  let end = evaluate.length - 1;

  while (start < end) {
    if (evaluate.charAt(start) !== evaluate.charAt(end)) return false;

    start++;
    end--;
  }

  return true;
}
