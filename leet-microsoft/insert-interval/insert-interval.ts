/**
 * https://leetcode.com/problems/insert-interval/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * Return intervals after the insertion.
 * 0 <= intervals.length <= 104
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 105
 * intervals is sorted by starti in ascending order.
 * newInterval.length == 2
 * 0 <= start <= end <= 105
 */
export function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) return [newInterval];

  let n = intervals.length;
  let i = 0;
  let start = 0;

  while (i < n) {
    if (intervals[i][0] > newInterval[0]) {
      start = i - 1;
      break;
    }
    i++;
  }

  let end = start;

  while (i < n) {
    if (newInterval[1] >= intervals[i][0]) {
      end = i;
    } else {
      break;
    }
    i++;
  }

  const min = Math.min(intervals[start][0], newInterval[0]);
  const max = Math.max(intervals[end][1], newInterval[1]);
  const deleteCount = end - start + 1;
  intervals.splice(start, deleteCount, [min, max]);

  return intervals;
}
