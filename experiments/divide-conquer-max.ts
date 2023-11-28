export function maxDivideConquer(list: number[]) {
  return divide(0, list.length - 1, list);
}

function divide(i: number, j: number, list: number[]) {
  if (i === j) return list[i];
  const half = Math.floor((i + j) / 2);
  return Math.max(divide(i, half, list), divide(half + 1, j, list));
}

console.log(maxDivideConquer([1, 2, 3, 4, 5, 9, 2, 3, 4, 8]));
