/**
 * https://youtu.be/oBt53YbR9Kk?t=15665
 * Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
 *
 * The function should return a boolean indicating whether or not the `target`
 * can be constructed by concatenating elements of the `wordBank` array.
 *
 * You may reuse elements of the `wordBank` as many times as needed.
 */
function canConstruct(target: string, wordBank: string[]) {
  if (target.length === 0) return true;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Time: O()
 * Space: O()
 */
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
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
