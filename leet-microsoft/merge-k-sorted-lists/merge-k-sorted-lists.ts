/**
 * https://leetcode.com/problems/merge-k-sorted-lists/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * k == lists.length
 * 0 <= k <= 104
 * 0 <= lists[i].length <= 500
 * -104 <= lists[i][j] <= 104
 * lists[i] is sorted in ascending order.
 * The sum of lists[i].length will not exceed 104.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;

  const filteredList = lists.filter(x => x !== null) as ListNode[];
  const hash = new Map(filteredList.map(val => [val, null]));

  let head: ListNode | null = null;
  let smallest = new ListNode(Infinity);

  for (let hp of hash.keys()) {
    if (hp && hp.val < smallest.val) {
      smallest = hp;
    }
  }

  if (smallest.val === Infinity) return null;
  hash.delete(smallest);
  if (smallest.next) hash.set(smallest.next, null);
  head = smallest;
  let pointer = head;

  while (hash.size > 0) {
    smallest = new ListNode(Infinity);
    for (let hp of hash.keys()) {
      if (hp.val < smallest.val) {
        smallest = hp;
      }
    }

    pointer.next = smallest;
    pointer = smallest;

    hash.delete(smallest);
    if (smallest.next) hash.set(smallest.next, null);
  }

  return head;
}

export function arrayToList(nums: number[]) {
  if (!nums || nums.length === 0) return null;
  let pointer = new ListNode(nums[nums.length - 1]);
  for (let i = nums.length - 2; i >= 0; i--) {
    let node = new ListNode(nums[i]);
    node.next = pointer;
    pointer = node;
  }
  return pointer;
}

export function listToArray(head: ListNode | null) {
  if (!head) return [];
  const result: number[] = [];
  let pointer: ListNode | null = head;
  do {
    result.push(pointer.val);
    pointer = pointer.next;
  } while (pointer !== null);
  return result;
}
