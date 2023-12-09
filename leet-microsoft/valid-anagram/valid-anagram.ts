/**
 * https://leetcode.com/problems/valid-anagram/
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const hash = new Map<string, { source: number; target: number }>();

  for (let i = 0; i < s.length; i++) {
    const cs = s.charAt(i);
    const hs = hash.get(cs);
    if (hs) hs.source++;
    else hash.set(cs, { source: 1, target: 0 });

    const ct = t.charAt(i);
    const ht = hash.get(ct);
    if (ht) ht.target++;
    else hash.set(ct, { source: 0, target: 1 });
  }

  for (let record of hash.values()) {
    if (record.source !== record.target) return false;
  }

  return true;
}
