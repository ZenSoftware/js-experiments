/** https://leetcode.com/problems/add-two-numbers/ */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null | undefined,
  l2: ListNode | null | undefined
): ListNode | null {
  const acc: number[] = [];
  let carry = 0;

  while (l1 || l2 || carry) {
    const v1 = l1?.val ?? 0;
    const v2 = l2?.val ?? 0;
    let sum = v1 + v2 + carry;

    if (sum > 9) {
      carry = 1;
      acc.push(sum % 10);
    } else {
      carry = 0;
      acc.push(sum);
    }

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return getList(acc);
}

export function getList(remainder: number[]) {
  let prev: ListNode | null = null;

  while (remainder.length) {
    const val = remainder.pop();
    const front = new ListNode(val);
    front.next = prev;
    prev = front;
  }

  return prev;
}

export function getArray(item: ListNode | null) {
  let acc: number[] = [];
  let node = item;

  while (node) {
    acc.push(node.val);
    node = node.next;
  }

  return acc;
}

// Example
const l1 = getList([2, 4, 3]);
const l2 = getList([5, 6, 4]);
const result = addTwoNumbers(l1, l2);
console.log(getArray(result));
