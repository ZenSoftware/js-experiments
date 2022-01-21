/** https://leetcode.com/problems/add-two-numbers/ */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {}

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
const testArr1 = getArray(testList1);
console.log(testArr1, testList1);

const testList2 = getList([5, 6, 4]);
const testArr2 = getArray(testList2);
console.log(testArr2, testList2);

const resultList = addTwoNumbers(testList1, testList2);
const result = getArray(resultList);
console.log(result, resultList);
