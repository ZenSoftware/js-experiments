/**
 * https://leetcode.com/problems/container-with-most-water/
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints
 * of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 */
function maxArea(height: number[]): number {
  let maxResult = 0;

  const dfs = (start: number) => {
    for (let end = start + 1; end < height.length; end++) {
      const h = Math.min(height[start], height[end]);
      let w = end - start;
      const area = w * h;
      if (area > maxResult) maxResult = area;
      dfs(end);
    }
  };

  dfs(0);
  return maxResult;
}

const height = [1, 1, 3];
console.log(maxArea(height));
