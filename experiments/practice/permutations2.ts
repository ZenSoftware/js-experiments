export function perumtations(elements: string[]): string[][] {
  if (elements.length === 0) return [[]];

  let first = elements[0];
  let rest = elements.slice(1);
  let permsWithoutFirst = perumtations(rest);
  let result: string[][] = [];

  for (let perm of permsWithoutFirst) {
    for (let i = 0; i <= perm.length; i++) {
      result.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }

  return result;
}

console.log(perumtations(['a', 'b', 'c']));
