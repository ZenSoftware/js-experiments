/**
 * https://leetcode.com/problems/roman-to-integer/
 * Given a roman numeral, convert it to an integer.
 */
function romanToInt(s: string): number {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const twoChars = s.charAt(i) + s.charAt(i + 1);

    if (
      twoChars === 'IV' ||
      twoChars === 'IX' ||
      twoChars === 'XL' ||
      twoChars === 'XC' ||
      twoChars === 'CD' ||
      twoChars === 'CM'
    ) {
      sum += ROMAN[twoChars];
      i += 1;
    } else {
      sum += ROMAN[s.charAt(i)];
    }
  }

  return sum;
}

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

console.log(romanToInt('MCMXCIV'));
