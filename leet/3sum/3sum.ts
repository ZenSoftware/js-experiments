/**
 * https://leetcode.com/problems/3sum/
 */
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        console.log(`(${i}, ${j}, ${k})`);
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return result;
}

// console.log(threeSum([-1, 0, 1, 2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-1, 0, 1]));
