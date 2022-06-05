function partition(s: string): string[][] {
  if (s === '') return [[]];
  if (s.length === 1) return [[s]];

  const results: string[][] = [];

  for (let i = 1; i < s.length; i++) {
    const prefix = s.slice(0, i);
    const suffix = s.slice(i);

    const suffixWays = partition(suffix);
    const targetWays = suffixWays.map(way => [prefix, ...way]);
    results.push(...targetWays);
  }

  return results;
}

function isPalindrome(str: string) {
  const startIndex = 0;
  const halfIndex = Math.floor(str.length / 2);
  const firstHalf = str.slice(startIndex, halfIndex);
  let secondHalf: string;
  if (str.length % 2) {
    secondHalf = str.slice(halfIndex + 1);
  } else {
    secondHalf = str.slice(halfIndex);
  }
  // console.log(firstHalf);
  // console.log(secondHalf);
  return firstHalf === secondHalf;
}
