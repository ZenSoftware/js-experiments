/**
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given a string s and an array of strings words. All the strings of words are of the same length.
 * A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.
 * For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
 * Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.
 * 1 <= s.length <= 104
 * 1 <= words.length <= 5000
 * 1 <= words[i].length <= 30
 * s and words[i] consist of lowercase English letters.
 */
export function findSubstring(s: string, words: string[]) {
  const results: number[] = [];

  for (let word of permutations(words)) {
    for (let i = 0; i < s.length - word.length + 1; i++) {
      const sub = s.substring(i, i + word.length);
      if (word === sub) {
        results.push(i);
      }
    }
  }

  results.sort((a, b) => a - b);
  return [...new Set(results)];
}

export function permutations(words: string[]): string[] {
  function perms(options: string[]) {
    if (options.length === 0) return [[]];

    const firstEl = options[0];
    const rest = options.slice(1);
    const permsWithoutFirst = perms(rest);
    const allPerms: string[][] = [];
    for (const permWithoutFirst of permsWithoutFirst) {
      for (let i = 0; i <= permWithoutFirst.length; i++) {
        const permWithFirst = [
          ...permWithoutFirst.slice(0, i),
          firstEl,
          ...permWithoutFirst.slice(i),
        ];
        allPerms.push(permWithFirst);
      }
    }
    return allPerms;
  }

  return perms(words).map(x => {
    let concatenated = '';
    for (let w of x) {
      concatenated += w;
    }
    return concatenated;
  });
}

console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']));
