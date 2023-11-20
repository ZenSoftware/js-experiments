/**
 * https://youtu.be/oBt53YbR9Kk?t=10084
 * Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.
 *
 * The function should return a 2D array containing all of the ways that the `target` can be
 * constructed by concatenating elements of the `wordBank` array. Each element of the 2D array
 * should represent one combination that constructs the `target`.
 *
 * You may resuse elements of `wordBank` as many times as needed.
 */
function allConstruct(target: string, wordBank: string[]) {
  if (target === '') return [[]];

  let result: string[][] = [];

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Brute force
 * Time: O(n^m)
 * Space: O(m) call stack size / not result size
 *
 * We are asked for an exhaustive result, therefore this changes what would account for our worste case scenario.
 */
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(
//   allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ])
// );
