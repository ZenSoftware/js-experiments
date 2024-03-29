/**
 * https://leetcode.com/problems/container-with-most-water/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 * n == height.length
 * 2 <= n <= 105
 * 0 <= height[i] <= 104
 */
export function maxArea(height: number[]): number {
  let lp = 0;
  let rp = height.length - 1;
  let largest = -Infinity;

  while (lp < rp) {
    const h = Math.min(height[lp], height[rp]);
    const w = rp - lp;
    const area = h * w;
    if (area > largest) largest = area;

    if (height[lp] <= height[rp]) {
      lp++;
    } else {
      rp--;
    }
  }

  return largest;
}
