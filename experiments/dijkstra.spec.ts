import { Vertex, dijkstra } from './dijkstra';

describe(`Dijkstra's Algorithm`, () => {
  const a = new Vertex('a');
  const b = new Vertex('b');
  const c = new Vertex('c');
  const d = new Vertex('d');
  const e = new Vertex('e');

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
    const result = dijkstra(a, d, graph);
    expect(result.path).toEqual([a, c, b, d]);
    expect(result.distance).toEqual(11);
  });
});
