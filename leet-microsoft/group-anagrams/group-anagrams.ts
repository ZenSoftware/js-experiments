/**
 * https://leetcode.com/problems/group-anagrams/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 1 <= strs.length <= 104
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 */
export function groupAnagrams(strs: string[]): string[][] {
  const result: Record<string, string[]> = {};

  for (let str of strs) {
    const sortedStr = sortStr(str);

    if (result[sortedStr] !== undefined) {
      result[sortedStr].push(str);
    } else {
      result[sortedStr] = [str];
    }
  }

  return Object.values(result);
}

function sortStr(str: string) {
  return str.split('').sort().join('');
}
