/**
 * https://youtu.be/oBt53YbR9Kk?t=9517
 * Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.
 *
 * The function should return the number of ways that the `target` can be constructed by concatenating
 * elemnts of the `wordBank` array.
 *
 * You may reuse elements of the `wordBank` as many times as needed.
 */
function countConstruct(target: string, wordBank: string[], memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let count = 0;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      count += countConstruct(suffix, wordBank, memo);
    }
  }

  memo[target] = count;
  return count;
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Brute force
 * Time: O(n^m * m)
 * Space: O(m^2)
 *
 * Memoized
 * Time: O(n*m^2)
 * Space: O(m^2)
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
