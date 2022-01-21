/** https://leetcode.com/problems/add-two-numbers/ */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const added = getNum(l1) + getNum(l2);
  const addedArray = added
    .toString()
    .split('')
    .map(i => parseInt(i));
  const addedList = getList(addedArray);
  return addedList;
}

function getList(remainder: number[], curr: ListNode | null = null) {
  if (remainder.length) {
    const val = remainder.pop();
    const next = new ListNode(val);
    if (curr) curr.next = next;
    else curr = next;
    getList(remainder, next);
  }
  return curr;
}

function getNum(item: ListNode | null, acc: number[] = []) {
  acc.unshift((<ListNode>item).val);
  if (item?.next !== null) {
    getNum((<ListNode>item).next, acc);
  }
  return parseInt(acc.join(''));
}

// TEST
const testList1 = getList([2, 2, 2]);
console.log(testList1);
const testList2 = getList([1, 2, 3]);
console.log(testList2);
const result = addTwoNumbers(testList1, testList2);
console.log(result);
