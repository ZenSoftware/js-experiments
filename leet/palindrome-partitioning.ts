function partition(s: string): string[][] {
  if (s === '') return [[]];

  const results = [];

  for (let i = 0; i < s.length; i++) {
    const consider = s.slice(i);
    if (isPalindrome(s)) {
      console.log(s);
    }
    partition(consider.slice(i + 1));
  }

  return results;
}

partition('abacaba');
console.log(isPalindrome('abacaba'));
// a,b,a,c,a,b,a
// a, b, aca, b, a
// a, bacab, a
// abacaba
// aba, c, aba

function isPalindrome(str: string) {
  const startIndex = 0;
  const halfIndex = Math.floor(str.length / 2);
  const firstHalf = str.slice(startIndex, halfIndex);
  let secondHalf: string;
  if (str.length % 2) secondHalf = str.slice(halfIndex + 1);
  else secondHalf = str.slice(halfIndex);
  // console.log(firstHalf);
  // console.log(secondHalf);
  return firstHalf === secondHalf;
}
