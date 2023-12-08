/**
 * https://leetcode.com/problems/length-of-last-word/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */
export function lengthOfLastWord(s: string): number {
  let i = s.length - 1;

  while (i >= 0) {
    if (s.charAt(i) !== ' ') break;
    i--;
  }

  let count = 0;
  while (i >= 0) {
    if (s.charAt(i) === ' ') break;
    count++;
    i--;
  }

  return count;
}
