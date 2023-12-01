/**
 * https://leetcode.com/problems/trapping-rain-water/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * n == height.length
 * 1 <= n <= 2 * 104
 * 0 <= height[i] <= 105
 */

// Solution: https://leet-codes.blogspot.com/2022/09/42-trapping-rain-water-stack.html

export function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  let leftMaxHeight = 0;
  let rightMaxHeight = 0;

  while (left <= right) {
    if (height[left] < height[right]) {
      if (height[left] > leftMaxHeight) {
        leftMaxHeight = height[left];
      } else {
        result += leftMaxHeight - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMaxHeight) {
        rightMaxHeight = height[right];
      } else {
        result += rightMaxHeight - height[right];
      }
      right--;
    }
  }
  return result;
}