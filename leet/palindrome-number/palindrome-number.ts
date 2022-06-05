/** https://leetcode.com/problems/palindrome-number/ */

export function isPalindrome(x: number): boolean | void {
  const val = x.toString();
  const halfIndex = Math.floor(val.length / 2);
  const firstHalf = val.substring(0, halfIndex);
  const secondHalf = val.substring(val.length % 2 ? halfIndex + 1 : halfIndex, val.length);
  const reversed = firstHalf.split('').reverse().join('');
  return secondHalf === reversed;
}
