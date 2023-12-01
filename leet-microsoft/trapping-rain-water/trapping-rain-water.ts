/**
 * https://leetcode.com/problems/trapping-rain-water/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * n == height.length
 * 1 <= n <= 2 * 104
 * 0 <= height[i] <= 105
 */
export function trap(height: number[]): number {
  let result = 0;

  for (let i = 1; i < height.length - 1; i++) {
    const bounds = getBoundaries(height, i);
    const lowestBound = Math.min(bounds.left, bounds.right);
    const filled = lowestBound - height[i];
    if (filled > 0) result += filled;
  }

  return result;
}

function getBoundaries(height: number[], index: number): { left: number; right: number } {
  const result = {
    left: 0,
    right: 0,
  };

  let left = index - 1;
  while (left >= 0) {
    if (height[left] > result.left) result.left = height[left];
    left--;
  }

  let right = index + 1;
  while (right < height.length) {
    if (height[right] > result.right) result.right = height[right];
    right++;
  }

  return result;
}
