export function intToRoman(num: number): string {
  let result = '';
  let remainder = num;

  for (let i = 0; i < SYMBOLS.length; i++) {
    const [symbol, decimal] = SYMBOLS[i];

    if (decimal <= remainder) {
      result += symbol;
      remainder -= decimal;
      if (remainder === 0) break;
      i--;
    }
  }

  return result;
}

const SYMBOLS: any[] = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];
