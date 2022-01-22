export function lengthOfLongestSubstring(s: string): number {
  const arr = s.split('');
  let longest = 0;
  let start = 0;
  let end = 1;

  while (start < s.length && s.length - longest > start) {
    s.substring(start, end);
  }

  // for (let [i, c] of arr.entries()) {

  // }

  return 0;
}
