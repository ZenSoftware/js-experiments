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
export function allConstruct(target: string, wordBank: string[]) {
  let table = Array(target.length + 1)
    .fill(null)
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    if (table[i].length > 0) {
      for (let word of wordBank) {
        if (target.slice(i).startsWith(word)) {
          const ways = table[i].map(way => [...way, word]);
          table[i + word.length].push(...ways);
        }
      }
    }
  }

  return table[target.length];
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Time: O(n^m)
 * Space: O(n^m)
 *
 * We are asked for an exhaustive result, therefore this changes what would account for our worste case scenario.
 */
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
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
