/**
 * https://leetcode.com/problems/trapping-rain-water/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * n == height.length
 * 1 <= n <= 2 * 104
 * 0 <= height[i] <= 105
 */

// Solution: https://leet-codes.blogspot.com/2022/09/42-trapping-rain-water-stack.html

export function trap(height: number[]): number {
  let stack = new Stack<number>();
  let i = 0;
  let result = 0;
  while (i < height.length) {
    if (stack.isEmpty() || height[i] <= height[stack.peek()]) {
      stack.push(i++);
    } else {
      let middle = stack.pop() as number;
      if (!stack.isEmpty()) {
        let minHeight = Math.min(height[i], height[stack.peek()]);
        result += (minHeight - height[middle]) * (i - stack.peek() - 1);
      }
    }
  }
  return result;
}

class Stack<T = any> {
  stack: T[];

  constructor() {
    this.stack = [];
  }
  push(a) {
    this.stack.push(a);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length == 0;
  }
}
