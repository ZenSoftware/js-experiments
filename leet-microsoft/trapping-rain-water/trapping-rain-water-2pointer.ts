/**
 * https://leetcode.com/problems/trapping-rain-water/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * n == height.length
 * 1 <= n <= 2 * 104
 * 0 <= height[i] <= 105
 */

// Solution: https://leet-codes.blogspot.com/2022/09/42-trapping-rain-water-stack.html
// Video solution: https://www.youtube.com/watch?v=ZI2z5pq0TqA&ab_channel=NeetCode

export function trap(height: number[]): number {
  let maxLeft = 0;
  let maxRight = 0;
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    if (maxLeft <= maxRight) {
      const val = maxLeft - height[left];

      left++;
    } else {
      right--;
    }
  }
}
