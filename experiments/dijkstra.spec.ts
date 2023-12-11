import { PathNode, dijkstra } from './dijkstra';

describe(`Dijkstra's Algorithm`, () => {
  const a = new PathNode('a');
  const b = new PathNode('b');
  const c = new PathNode('c');
  const d = new PathNode('d');
  const e = new PathNode('e');

  a.adjacent = [
    { to: c, distance: 2 },
    { to: b, distance: 4 },
  ];
  b.adjacent = [
    { to: a, distance: 4 },
    { to: c, distance: 1 },
    { to: d, distance: 3 },
    { to: e, distance: 2 },
  ];
  c.adjacent = [
    { to: a, distance: 2 },
    { to: b, distance: 1 },
  ];
  d.adjacent = [
    { to: b, distance: 3 },
    { to: e, distance: 5 },
  ];
  e.adjacent = [
    { to: b, distance: 2 },
    { to: d, distance: 5 },
  ];

  const graph = [a, b, c, d, e];

  it('evaluates correctly 1', () => {
    const shortest = dijkstra(a, d, graph);
    expect(shortest.path).toEqual([a, c, b, d]);
    expect(shortest.distance).toEqual(11);
  });
});
