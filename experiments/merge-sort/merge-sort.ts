export function mergeSort<T>(array: T[], predicate?: (a: T, b: T) => number) {
  if (array.length === 1) return;

  const halfWay = Math.floor(array.length / 2);
  const left = array.slice(0, halfWay);
  const right = array.slice(halfWay);

  mergeSort(left, predicate);
  mergeSort(right, predicate);
  merge(left, right, array, predicate);

  return array;
}

export function merge<T>(left: T[], right: T[], array: T[], predicate) {
  let a = 0;
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (predicate) {
      if (predicate(left[l], right[r]) < 0) {
        array[a] = left[l];
        a++;
        l++;
      } else {
        array[a] = right[r];
        a++;
        r++;
      }
    } else {
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

console.log(mergeSort([-3, 6, 7, -5, 8, -4, 9, 1, 2], (a, b) => a - b));
console.log([-3, 6, 7, -5, 8, -4, 9, 1, 2].sort((a, b) => a - b));
