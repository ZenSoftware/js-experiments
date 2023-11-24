/**
 * @param array A sorted array in ascending order
 * @param lookFor Item to look for
 * @returns The array index of the element or -1 if not found
 */
export function binarySearch(array: any[], lookFor: any) {
  function bs(start: number, end: number) {
    if (start > end) return -1;

    const middleIndex = Math.floor((start + end) / 2);
    const middleValue = array[middleIndex];

    if (middleValue === lookFor) return middleIndex;

    if (middleValue > lookFor) return bs(start, middleIndex - 1);
    else return bs(middleIndex + 1, end);
  }

  return bs(0, array.length - 1);
}
