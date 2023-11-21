/**
 * https://leetcode.com/problems/longest-palindromic-substring/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given a string s, return the longest palindromic substring in s.
 * - (1 <= s.length <= 1000)
 */

export function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s;
  }

  let maxLen = 0;
  let lo = 0;
  let result = s;

  const expandPalindrome = (start, end) => {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      start--;
      end++;
    }
    if (maxLen < end - start - 1) {
      maxLen = end - start - 1;
      lo = start + 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandPalindrome(i, i);
    expandPalindrome(i, i + 1);
  }

  return result.substring(lo, lo + maxLen);
}

// export function longestPalindrome(s: string): string {
//   if (s.length <= 1) return s;

//   let longest = s[0];

//   for (let i = 0; i < s.length - 1; i++) {
//     for (let j = s.length - 1; j > i && j - i + 1 > longest.length; j--) {
//       const evaluating = s.substring(i, j + 1);

//       if (isPalindrome(evaluating)) {
//         longest = evaluating;
//         break;
//       }
//     }
//   }

//   return longest;
// }

// export function isPalindrome(s: string): boolean {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     if (s[left] !== s[right]) return false;

//     left++;
//     right--;
//   }
//   return true;
// }
