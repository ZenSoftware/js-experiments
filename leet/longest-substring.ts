/** https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

export function lengthOfLongestSubstring(s: string): number {
  let longest = '';

  for (let start = 0; start < s.length; start++) {
    let evaluate = '';
    for (let end = start + 1; end <= s.length && s.length - start > longest.length; end++) {
      if (evaluate.includes(s[end - 1])) {
        break;
      }

      evaluate = s.substring(start, end);
      console.log(evaluate);

      if (evaluate.length > longest.length) {
        longest = evaluate;
      }
    }
  }

  console.log('LONGEST:', longest);
  return longest.length;
}

const result = lengthOfLongestSubstring('12344444');
console.log('RESULT:', result);
