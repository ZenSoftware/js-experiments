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
  const added = getNum(l1) + getNum(l2);
  const addedArray = added
    .toString()
    .split('')
    .reverse()
    .map(i => parseInt(i));
  const addedList = getList(addedArray);
  return addedList;
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

export function getNum(item: ListNode | null, acc: number[] = []) {
  acc.unshift((<ListNode>item).val);
  if (item?.next !== null) {
    getNum((<ListNode>item).next, acc);
  }
  return parseInt(acc.join(''));
}

export function getArray(item: ListNode | null, acc: number[] = []) {
  acc.unshift((<ListNode>item).val);
  if (item?.next !== null) {
    getArray((<ListNode>item).next, acc);
  }
  return acc;
}

// const testList1 = getList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
// const testNum1 = getNum(testList1);
// console.log(testNum1, testList1);

// const testList2 = getList([1, 2, 3]);
// const testNum2 = getNum(testList2);
// console.log(testNum2, testList2);

// const resultList = addTwoNumbers(testList1, testList2);
// const resultNum = getNum(resultList);
// console.log(resultNum, resultList);
