/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent. Return the answer
 * in any order.
 */

const PHONE_LETTERS: { [key: string]: string[] } = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
  if (digits === '') return [];

  const digitsArray = digits.split('');
  let result = [...PHONE_LETTERS[digitsArray[0]]];

  for (let i = 1; i < digitsArray.length; i++) {
    let possibilities = PHONE_LETTERS[digitsArray[i]];
    let tempResult: string[] = [];
    for (let r of result) {
      for (let p of possibilities) {
        tempResult.push(r + p);
      }
    }
    result = tempResult;
  }

  return result;
}

console.log(letterCombinations('23'));
