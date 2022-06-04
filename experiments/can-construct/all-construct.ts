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
  if (target === '') return 1;

  let count = 0;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      count += allConstruct(suffix, wordBank);
    }
  }

  return count;
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Brute force
 * Time: O()
 * Space: O()
 *
 * Memoized
 * Time: O()
 * Space: O()
 */
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
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
