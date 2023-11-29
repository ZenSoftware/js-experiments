/**
 * https://leetcode.com/problems/next-permutation/
 * A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
 * For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
 * The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
 * For example, the next permutation of arr = [1,2,3] is [1,3,2].
 * Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
 * While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
 * Given an array of integers nums, find the next permutation of nums.
 * The replacement must be in place and use only constant extra memory.
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 */

/**
 * Solution: https://leetcode.com/problems/next-permutation/solutions/2238691/functional-declarative-javascript-typescript-solution/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 */

export function nextPermutation(nums: number[]) {
  const firstIndex = lastIndexWhere(nums, (num, i) => num < nums[i + 1]);

  if (firstIndex === undefined) {
    reverse(nums, 0, nums.length - 1);
    return nums;
  }

  const secondIndex = lastIndexWhere(nums, (num, i) => num > nums[firstIndex]) as number;

  swap(nums, firstIndex, secondIndex);

  reverse(nums, firstIndex + 1, nums.length - 1);
  return nums;
}

function swap(nums: number[], start: number, end: number) {
  const temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
  return nums;
}

function lastIndexWhere(nums: number[], condition: (num: number, i: number) => boolean) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (condition(nums[i], i)) return i;
  }
  return undefined;
}

function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
  return nums;
}

const step1 = nextPermutation([1, 2, 3, 4]);
console.log(step1);
const step2 = nextPermutation(step1);
console.log(step2);
const step3 = nextPermutation(step2);
console.log(step3);
const step4 = nextPermutation(step3);
console.log(step4);
const step5 = nextPermutation(step4);
console.log(step5);
