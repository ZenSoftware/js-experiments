/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];
  if (!hasCommonPrefix(strs)) return '';

  let result = '';

  return result;
}

function hasCommonPrefix(strs: string[]) {
  const firstLetters: string[] = [];

  for (let i = 0; i < strs.length; i++) {
    firstLetters.push(strs[i][0]);
  }

  for (let letter of firstLetters) {
    if (firstLetters.indexOf(letter) !== firstLetters.lastIndexOf(letter)) return true;
  }

  return false;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['flower', 'flow', 'abcde', 'abcdef']));
