/**
 * https://leetcode.com/problems/container-with-most-water/
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints
 * of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * An explination to the O(n) solution can be found here:
 * https://leetcode.com/problems/container-with-most-water/discuss/6099/yet-another-way-to-see-what-happens-in-the-on-algorithm
 */
function maxArea(height: number[]): number {
  let maxResult = 0;

  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const width = right - left;

    let area: number;
    if (height[left] < height[right]) {
      area = height[left] * width;
      ++left;
    } else {
      area = height[right] * width;
      --right;
    }

    if (area > maxResult) maxResult = area;
  }

  return maxResult;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
