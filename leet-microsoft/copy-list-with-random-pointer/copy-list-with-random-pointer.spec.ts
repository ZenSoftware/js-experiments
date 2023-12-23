import { copyRandomList, Node } from './copy-list-with-random-pointer';

describe('Copy List with Random Pointer', () => {
  it('evaluates correctly', () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n1.random = n3;
    n2.random = n4;
    n3.random = n1;

    const copyHead = copyRandomList(n1) as Node;

    expect(copyHead).not.toBe(n1);
    expect(copyHead.val).toEqual(n1.val);

    expect(copyHead.next).not.toBe(n1.next);
    expect(copyHead.next?.val).toEqual(n1.next?.val);

    expect(copyHead.random).not.toBe(n1.random);
    expect(copyHead.random?.val).toEqual(n1.random?.val);
  });
});
