/**
 * https://leetcode.com/problems/partition-list/description/
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 * The number of nodes in the list is in the range [0, 200].
 * -100 <= Node.val <= 100
 * -200 <= x <= 200
 */

// solution: https://leetcode.com/problems/partition-list/solutions/4197806/beast-94-type-script-easy-solution-with-explanation/

export function partition(head: ListNode | null, x: number): ListNode | null {
  const smallHead = new ListNode();
  let smallPointer = smallHead;
  const pointerHead = new ListNode(0, head);
  let pointer = pointerHead;

  while (pointer.next) {
    if (pointer.next.val < x) {
      // connect the val to the small list
      smallPointer.next = pointer.next;

      // advance the tail of the small list
      smallPointer = smallPointer.next;

      // remove the val from the bigger list
      pointer.next = pointer.next.next;
    } else {
      // we must remove any values after the tail of the
      // small list due to values possibly being larger afterwards
      smallPointer.next = null;

      // advance the pointer
      pointer = pointer.next;
    }
  }

  // attach the smaller than x list to the bigger than x list;
  smallPointer.next = pointerHead.next;

  // return the head utilizing the list node that points to it
  return smallHead.next;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function toList(vals: number[]) {
  if (vals.length === 0) return null;
  let pointer = new ListNode(vals[vals.length - 1]);
  for (let i = vals.length - 2; i >= 0; i--) {
    const node = new ListNode(vals[i]);
    node.next = pointer;
    pointer = node;
  }
  return pointer;
}

export function toArray(head: ListNode | null) {
  if (!head) return [];
  let result: number[] = [];
  let pointer: ListNode | null = head;
  while (pointer !== null) {
    result.push(pointer.val);
    pointer = pointer.next;
  }
  return result;
}
