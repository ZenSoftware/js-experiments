/** https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

// export function almost(s: string): number {
//   let longest = '';

//   for (let start = 0; start < s.length; start++) {
//     for (let end = start + 1; end < s.length && s.length - start > longest.length; end++) {
//       console.log(`${s.substring(start, end)} [${s[end]}]`);

//       if (s.substring(start, end).includes(s[end])) {
//         break;
//       }

//       if (1 + end - start > longest.length) {
//         longest = s.substring(start, end + 1);
//       }
//     }
//   }

//   console.log('LONGEST:', longest);
//   return longest.length;
// }

export function lengthOfLongestSubstring(s: string): number {
  let longest = '';

  for (let start = 0; start < s.length; start++) {
    let evaluate = '';
    for (let end = start + 1; end <= s.length; end++) {
      if (evaluate.includes(s[end - 1])) {
        break;
      }

      evaluate = s.substring(start, end);
      console.log(`${evaluate} [${s[end - 1]}]`);

      if (evaluate.length > longest.length) {
        longest = evaluate;
      }
    }
  }

  console.log('LONGEST:', longest);
  return longest.length;
}

const result = lengthOfLongestSubstring('123345');
console.log('RESULT:', result);
