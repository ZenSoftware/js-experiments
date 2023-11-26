/**
 * https://leetcode.com/problems/longest-common-prefix/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 */
export function longestCommonPrefix(strs: string[]): string {
  let result = '';
  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    if (stringsEqualAt(strs, i)) result += firstStr.charAt(i);
    else break;
  }

  return result;
}

function stringsEqualAt(strs: string[], index: number): boolean {
  const firstStr = strs[0];

  let charToEqual: string;
  if (index + 1 <= firstStr.length) charToEqual = firstStr.charAt(index);
  else return false;

  for (let i = 1; i < strs.length; i++) {
    if (index + 1 > strs[i].length || charToEqual !== strs[i].charAt(index)) {
      return false;
    }
  }

  return true;
}
