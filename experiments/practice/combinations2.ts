export function combinations<T>(elements: T[]): T[][] {
  if (elements.length === 0) return [[]];

  let first = elements[0];
  let rest = elements.slice(1);
  let combsWithoutFirst = combinations(rest);
  let combsWithfirst: T[][] = [];

  for (let comb of combsWithoutFirst) {
    combsWithfirst.push([first, ...comb]);
  }

  return [...combsWithoutFirst, ...combsWithfirst];
}

console.log(combinations(['a', 'b', 'c']));
