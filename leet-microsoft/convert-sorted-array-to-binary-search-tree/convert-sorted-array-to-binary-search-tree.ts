/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums is sorted in a strictly increasing order.
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;

  const root = new TreeNode(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    const node = nextAvailable(root);
    if (!node.left) node.left = new TreeNode(nums[i]);
    else node.right = new TreeNode(nums[i]);
  }

  return root;
}

function nextAvailable(root: TreeNode): TreeNode {
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const current = queue.shift() as TreeNode;

    if (current.left) queue.push(current.left);
    else return current;

    if (current.right) queue.push(current.right);
    else return current;
  }

  throw 'something went wrong';
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
