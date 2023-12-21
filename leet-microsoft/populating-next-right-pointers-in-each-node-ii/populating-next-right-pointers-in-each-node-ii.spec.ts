import { connect, Node } from './populating-next-right-pointers-in-each-node-ii';

describe('Populating Next Right Pointers in Each Node', () => {
  it('evaluates correctly', () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);
    const n5 = new Node(5);
    const n7 = new Node(7);

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.right = n7;

    connect(n1);

    expect(n1.next).toEqual(null);
    expect(n2.next).toEqual(n3);
    expect(n3.next).toEqual(null);
    expect(n4.next).toEqual(n5);
    expect(n5.next).toEqual(n7);
    expect(n7.next).toEqual(null);
  });
});
