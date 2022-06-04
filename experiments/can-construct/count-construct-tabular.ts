/**
 * https://youtu.be/oBt53YbR9Kk?t=16751
 * Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.
 *
 * The function should return the number of ways that the `target` can be constructed by concatenating
 * elemnts of the `wordBank` array.
 *
 * You may reuse elements of the `wordBank` as many times as needed.
 */
function countConstruct(target: string, wordBank: string[], memo = {}) {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] > 0) {
      for (let word of wordBank) {
        if (target.substring(i).startsWith(word)) {
          table[i + word.length] += table[i];
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
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
);
