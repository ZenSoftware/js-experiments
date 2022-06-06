/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  let result = '';

  return result;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
