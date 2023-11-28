export function mergeSort(list: number[]) {
  if (list.length <= 1) return list;

  const mid = Math.floor(list.length / 2);
  const left = list.slice(0, mid);
  const right = list.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  let sorted: number[] = [];

  // create sorted array with left and right sublist
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift() as number);
    } else {
      sorted.push(right.shift() as number);
    }
  }

  return [...sorted, ...left, ...right];
}

console.log(mergeSort([1, 2, 3, 4, 5, 9, 2, 3, 4, 8]));
