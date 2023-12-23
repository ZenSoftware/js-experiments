export function partition(s: string): string[][] {
  const result: string[][] = [];
  const part: string[] = [];

  function dfs(i: number) {
    if (i >= s.length) {
      result.push([...part]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      part.push(s.substring(i, j + 1));
      dfs(j + 1);
      part.pop();
    }
  }

  dfs(0);
  return result;
}

console.log(partition('abc'));
