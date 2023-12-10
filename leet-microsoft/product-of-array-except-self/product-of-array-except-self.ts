/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 2 <= nums.length <= 105
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */

// Solution: https://www.youtube.com/watch?v=bNvIQI2wAjk&ab_channel=NeetCode

export function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  const prefix = Array(length);
  const postfix = Array(length);
  const result = Array(length);

  for (let i = 0; i < length; i++) {
    if (i === 0) prefix[i] = nums[i];
    else prefix[i] = nums[i] * prefix[i - 1];
  }

  for (let i = length - 1; i >= 0; i--) {
    if (i === length - 1) postfix[i] = nums[i];
    else postfix[i] = nums[i] * postfix[i + 1];
  }

  for (let i = 0; i < length; i++) {
    if (i === 0) result[i] = postfix[1];
    else if (i === length - 1) result[i] = prefix[i - 1];
    else result[i] = prefix[i - 1] * postfix[i + 1];
  }

  return result;
}
