/**
 * https://leetcode.com/problems/restore-ip-addresses/
 * A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.
 * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
 * Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.
 * 1 <= s.length <= 20
 * s consists of digits only.
 */

export function restoreIpAddresses(s: string): string[] {
  let result: string[] = [];

  function dp(index: number, cur: string[]) {
    if (index > s.length) return;

    if (cur.length >= 4) {
      if (index === s.length) {
        result.push(cur.join('.'));
      }
      return;
    }

    cur.push(s.charAt(index));
    dp(index + 1, cur);
    cur.pop();

    if (index < s.length - 1) {
      if (s.charAt(index) !== '0') {
        cur.push(s.substring(index, index + 2));
        dp(index + 2, cur);
        cur.pop();
      }
    }

    if (index < s.length - 2) {
      if (s.charAt(index) !== '0') {
        const possibility = s.substring(index, index + 3);
        if (Number(possibility) <= 255) {
          cur.push(possibility);
          dp(index + 3, cur);
          cur.pop();
        }
      }
    }
  }

  dp(0, []);
  return result;
}
