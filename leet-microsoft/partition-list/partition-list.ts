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
  const smallerHead = new ListNode();
  let lastSmallerNode = smallerHead;
  const pointerHead = new ListNode(0, head);
  let pointer = pointerHead;

  //[1, 4, 3, 2, 5, 2]
  //[1, 2, 2, 4, 3, 5]
  while (pointer.next) {
    // we always check for the value of the next node to remove it easily
    if (pointer.next.val < x) {
      // here we add the samaller node to our smaller list
      lastSmallerNode.next = pointer.next;

      // then we update the tail of the smallers list
      lastSmallerNode = pointer.next;

      // here we remove the smaller node from the current list
      pointer.next = pointer.next.next;
    } else {
      // since the head of the smaller values can cointain greater values we need to remove the last value every time that we found a bigger value
      lastSmallerNode.next = null;
      pointer = pointer.next;
    }
  }

  // finally we merge both lists
  lastSmallerNode.next = pointerHead.next;

  // notice that we return the second node of the head because our head starts with a placeholder value which helped us to start the list
  return smallerHead.next;
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
