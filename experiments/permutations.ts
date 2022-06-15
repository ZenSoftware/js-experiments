/**
 * https://www.youtube.com/watch?v=us0cYQXQpxg
 * Every permutation must contain every element, just change the order.
 * ## Complexity
 * Time: O(n!)
 * Space: O(n^2)
 */

function permutations(elements: any[]): any[][] {
  if (elements.length === 0) return [[]];

  const firstEl = elements[0];
  const rest = elements.slice(1);
  const permsWithoutFirst = permutations(rest);

  const allPerms: any[][] = [];

  for (let perm of permsWithoutFirst) {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
      allPerms.push(permWithFirst);
    }
  }

  return allPerms;
}

console.log(permutations(['a', 'b', 'c']));
