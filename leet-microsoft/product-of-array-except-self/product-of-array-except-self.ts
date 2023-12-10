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

  prefix[0] = nums[0];
  for (let i = 1; i < length; i++) {
    prefix[i] = nums[i] * prefix[i - 1];
  }

  postfix[length - 1] = nums[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    postfix[i] = nums[i] * postfix[i + 1];
  }

  result[0] = postfix[1];
  result[length - 1] = prefix[length - 2];
  for (let i = 1; i < length - 1; i++) {
    result[i] = prefix[i - 1] * postfix[i + 1];
  }

  return result;
}
