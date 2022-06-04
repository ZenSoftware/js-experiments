/**
 * https://youtu.be/oBt53YbR9Kk?t=15665
 * Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
 *
 * The function should return a boolean indicating whether or not the `target`
 * can be constructed by concatenating elements of the `wordBank` array.
 *
 * You may reuse elements of the `wordBank` as many times as needed.
 */
export function canConstruct(target: string, wordBank: string[]) {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (let word of wordBank) {
        if (target.substring(i).startsWith(word)) {
          table[i + word.length] = true;
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
 * Time: O(m^2*n)
 * Space: O(m)
 */
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(canConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log(canConstruct('purple', ['le', 'purp', 'purpl']));
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(
//   canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ])
// );
