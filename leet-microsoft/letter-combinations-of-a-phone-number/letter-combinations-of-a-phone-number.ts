/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * 0 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 */
export function letterCombinations(digits: string): string[] {
  const results: string[] = [];

  for (let i = 0; i < digits.length; i++) {
    const letters = PHONE_DIGIT_LETTERS[digits.charAt(i)];
  }

  return results;
}

const PHONE_DIGIT_LETTERS = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};
