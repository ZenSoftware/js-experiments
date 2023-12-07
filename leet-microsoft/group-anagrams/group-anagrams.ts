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
    let added = false;

    for (let key in result) {
      if (isAnagram(key, str)) {
        result[key].push(str);
        added = true;
      }
    }

    if (!added) result[str] = [str];
  }

  return Object.values(result);
}

export function isAnagram(a: string, b: string) {
  if (a.length === b.length) {
    const logA: Record<string, number> = {};

    for (let i = 0; i < a.length; i++) {
      const charA = a.charAt(i);
      if (logA[charA] !== undefined) ++logA[charA];
      else logA[charA] = 1;
    }

    for (let i = 0; i < b.length; i++) {
      const charB = b.charAt(i);
      if (logA[charB] !== undefined) {
        if (--logA[charB] < 0) return false;
      } else {
        return false;
      }
    }

    for (let key in logA) {
      if (logA[key] !== 0) return false;
    }

    return true;
  }

  return false;
}
