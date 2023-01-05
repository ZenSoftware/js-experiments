function combinations(elements: string[]) {
  if (elements.length === 0) return [[]];

  const firstEl = elements[0];
  const rest = elements.slice(1);
  const combsWithoutFirst = combinations(rest);
  const combsWithFirst: string[][] = [];

  for (const comb of combsWithoutFirst) {
    const combWithFirst = [firstEl, ...comb];
    combsWithFirst.push(combWithFirst);
  }

  return [...combsWithoutFirst, ...combsWithFirst];
}

const result = combinations(['a', 'b', 'c']);
console.log(result);
