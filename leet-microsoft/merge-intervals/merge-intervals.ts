/**
 * https://leetcode.com/problems/merge-intervals/
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 1 <= intervals.length <= 104
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 104
 */

export function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  let left = 0;
  let right = 1;

  let result = [...intervals];
  result.sort((a, b) => a[0] - b[0]);

  while (true) {
    if (isOverlapped(result[left], result[right])) {
      const merged = mergeIntervals(result[left], result[right]);
      result.splice(right, 1);
      result.splice(left, 1, merged);

      if (left >= result.length - 1) break;
    } else {
      right++;

      if (right >= result.length) {
        left++;
        if (left >= result.length - 1) break;
        right = left + 1;
      }
    }
  }

  return result;
}

function mergeIntervals(a: number[], b: number[]) {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

function isOverlapped(a: number[], b: number[]) {
  return (b[0] <= a[0] && a[0] <= b[1]) || (a[0] <= b[0] && b[0] <= a[1]);
}
