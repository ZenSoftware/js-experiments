/**
 * https://leetcode.com/problems/merge-intervals/
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 1 <= intervals.length <= 104
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 104
 */

export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let n = intervals.length;
  let results: number[][] = [];
  let i = 0;
  while (i < n) {
    let tmp = new Array(2);
    tmp[0] = intervals[i][0];
    let max = intervals[i][1];
    i++;
    while (i < n && max >= intervals[i][0]) {
      if (intervals[i][0] < tmp[0]) tmp[0] = intervals[i][0];
      max = Math.max(max, intervals[i][1]);
      i++;
    }
    tmp[1] = max;
    results.push(tmp);
  }
  return results;
}
