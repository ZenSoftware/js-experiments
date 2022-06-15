/**
 * https://www.youtube.com/watch?v=NA2Oj9xqaZQ
 * ## Complexity
 * Time: O(2^n)
 * Space: O(n^2)
 * Tree depth of n due to recursing by excluding only first.
 * Each stack frame has up to an array of n.
 * Therefore space complexity is n*n.
 */

function combinations(elements: any[]) {
  if (elements.length === 0) return [[]];

  const firstEl = elements[0];
  const combsExcludingFirst = combinations(elements.slice(1));

  const combsIncludingFirst: any[][] = [];
  for (let item of combsExcludingFirst) {
    combsIncludingFirst.push([firstEl, ...item]);
  }

  return [...combsExcludingFirst, ...combsIncludingFirst];
}

const sample = ['a', 'b', 'c'];
console.log(combinations(sample));
