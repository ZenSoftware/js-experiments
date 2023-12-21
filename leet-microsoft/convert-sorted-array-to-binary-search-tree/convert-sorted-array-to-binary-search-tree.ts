/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums is sorted in a strictly increasing order.
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  const mid = Math.floor((nums.length - 1) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
}

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
