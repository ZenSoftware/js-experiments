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
    const bounds = getBounds(height, i);
    const lowestBound = Math.min(bounds.left!.height, bounds.right!.height);
    const filled = lowestBound - height[i];
    if (filled > 0) result += filled;
  }

  return result;
}

function getBounds(height: number[], index: number): Bounds {
  let left = getBoundsLeft(height, index);
  let right = getBoundsRight(height, index);
  return { left, right };
}

function getBoundsLeft(height: number[], index: number): Terrain {
  let result: Terrain = {
    height: 0,
    index: 0,
  };

  let left = index - 1;
  while (left >= 0) {
    if (height[left] > result.height) {
      result = {
        height: height[left],
        index: left,
      };
    }

    left--;
  }

  return result;
}

function getBoundsRight(height: number[], index: number): Terrain {
  let result: Terrain = {
    height: 0,
    index: height.length - 1,
  };

  let right = index + 1;
  while (right < height.length) {
    if (height[right] > result.height) {
      result = {
        height: height[right],
        index: right,
      };
    }

    right++;
  }

  return result;
}

interface Terrain {
  height: number;
  index: number;
}

interface Bounds {
  left?: Terrain;
  right?: Terrain;
}
