/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */
function longestCommonPrefix(strs: string[]): string {
  let shortestLength = Infinity;
  for (let s = 0; s < strs.length; s++) {
    if (strs[s].length < shortestLength) shortestLength = strs[s].length;
  }

  let result = '';

  for (let c = 0; c < shortestLength; c++) {
    const character = strs[0][c];
    for (let s = 0; s < strs.length; s++) {
      if (strs[s][c] !== character) {
        return result;
      }
    }
    result += character;
  }

  return result;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['flower', 'flow', 'abcde', 'abcdef']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['a']));
console.log(longestCommonPrefix(['', '']));
