/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given a string s, find the length of the longest substring without repeating characters.
 * - 0 <= s.length <= 5 * 104
 * - s consists of English letters, digits, symbols and spaces.
 */

export function lengthOfLongestSubstring(s: string): number {
  const setMap = new Set();
  let max = 0;
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    while (setMap.has(key)) {
      setMap.delete(s[index]);
      index++;
    }
    setMap.add(key);
    max = Math.max(max, setMap.size);
  }
  return max;
}

// export function lengthOfLongestSubstring(s: string): number {
//   let longest = 0;

//   if (s.length <= 1) return s.length;

//   longest = 1;

//   for (let start = 0; start < s.length - 1 && s.length - start + 1 > longest; start++) {
//     for (let end = start + 1; end < s.length; end++) {
//       if (s.substring(start, end).includes(s[end])) break;

//       const length = end - start + 1;

//       if (length > longest) longest = length;
//     }
//   }

//   return longest;
// }
