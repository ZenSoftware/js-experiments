export function mergeSort(list: number[]) {
  if (list.length <= 1) return list;

  const mid = Math.floor(list.length / 2);
  const left = list.slice(0, mid);
  const right = list.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(a: number[], b: number[]) {
  const sorted: number[] = [];
  while (a.length && b.length) {
    if (a[0] <= b[0]) sorted.push(a.shift() as number);
    else sorted.push(b.shift() as number);
  }
  return [...sorted, ...a, ...b];
}

console.log(mergeSort([3, 6, 4, 7, 1, 5, 2, 8]));
