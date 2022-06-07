export function mergeSort(array: number[]) {
  if (array.length === 1) return;

  const halfWay = Math.floor(array.length / 2);
  const left = array.slice(0, halfWay);
  const right = array.slice(halfWay);

  mergeSort(left);
  mergeSort(right);
  merge(left, right, array);

  return array;
}

export function merge(left: number[], right: number[], array: number[]) {
  let a = 0;
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      array[a] = left[l];
      a++;
      l++;
    } else {
      array[a] = right[r];
      a++;
      r++;
    }
  }

  while (l < left.length) {
    array[a] = left[l];
    a++;
    l++;
  }

  while (r < right.length) {
    array[a] = right[r];
    a++;
    r++;
  }
}

console.log(
  mergeSort([
    3, 6, 7, 1, 2, 9, 4, 8, 5, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 4, 2, 1,
    2, 3, 4, 5, 6, 4, 3, 2, 4, 6, 8, 3, 2, 4, 5, 7, 8, 9, 0, 4, 3, 1, 3, 4, 6, 7, 89, 3, 23, 2, 4,
    5, 7, 8, 4, 32, 3, 54, 5, 6, 3, 2, 1, 2, 5, 6, 8, 0, 0, 5, 3, 2, 2, 1, 2, 43, 4, 5, 6, 4, 3, 2,
    4, 4, 3, 2, 2, 34, 5, 5, 6, 4, 3, 2, 4, 5, 6, 6, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 45, 3, 1, 2, 43,
    5, 6, 8, 5, 3, 2, 1,
  ])
);
