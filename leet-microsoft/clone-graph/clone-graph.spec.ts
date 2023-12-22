import { cloneGraph, Node } from './clone-graph';

describe('Clone Graph', () => {
  it('evaluates correctly', () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);

    n1.neighbors = [n2, n4];
    n2.neighbors = [n1, n3];
    n3.neighbors = [n2, n4];
    n4.neighbors = [n1, n3];

    const reuslt = cloneGraph(n1) as Node;
    expect(reuslt.val).toEqual(1);
    expect(reuslt).not.toEqual(n1);
    expect(reuslt.neighbors.map(x => x.val)).toEqual([2, 4]);
  });
});
