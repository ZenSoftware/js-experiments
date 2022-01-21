/** https://leetcode.com/problems/add-two-numbers/ */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return add(l1, l2);
}

function add(
  l1: ListNode | null | undefined,
  l2: ListNode | null | undefined,
  acc: number[] = [],
  carry: boolean = false
): ListNode | null {
  if (l1 || l2) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;
    let frontVal = val1 + val2;
    if (carry) frontVal += 1;

    if (frontVal >= 10) acc.push(frontVal - 10);
    else acc.push(frontVal);

    return add(l1?.next, l2?.next, acc, frontVal >= 10);
  }
  return getList(acc);
}

export function getList(remainder: number[]) {
  let prev = null;

  while (remainder.length) {
    const val = remainder.pop();
    const front = new ListNode(val);
    front.next = prev;
    prev = front;
  }

  return prev;
}

export function getArray(item: ListNode | null, acc: number[] = []) {
  acc.push((<ListNode>item).val);
  if (item?.next !== null) {
    getArray((<ListNode>item).next, acc);
  }
  return acc;
}

const testList1 = getList([2, 4, 3]);
const testList2 = getList([5, 6, 4]);
const resultList = addTwoNumbers(testList1, testList2);
console.log(getArray(resultList));
