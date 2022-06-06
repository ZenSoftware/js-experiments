/**
 * https://leetcode.com/problems/integer-to-roman/
 * Given an integer, convert it to a roman numeral.
 *
 * Solution: https://javascript.plainenglish.io/leetcode-12-integer-to-roman-javascript-21459e45a0ee
 */

function intToRoman(num: number): string {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';

  for (let key in map) {
    result += key.repeat(Math.floor(num / map[key]));
    num %= map[key];
  }

  return result;
}

let str = '1234';
console.log(intToRoman(4994));
console.log(4994 % 1000);
