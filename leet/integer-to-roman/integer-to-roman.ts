/**
 * https://leetcode.com/problems/integer-to-roman/
 * Given an integer, convert it to a roman numeral.
 */

function intToRoman(num: number): string {}

const ROMAN = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

console.log(intToRoman(1994));
