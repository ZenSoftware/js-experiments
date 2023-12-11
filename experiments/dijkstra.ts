/**
 * [Sample Graph](https://www.freecodecamp.org/news/dijkstras-algorithm-explained-with-a-pseudocode-example/)
 */

export function dijkstra(from: Vertex, to: Vertex, graph: Vertex[]) {
  const shortest = new Map<Vertex, number>();
  for (let v of graph) {
    shortest.set(v, Infinity);
  }
  shortest.set(from, 0);
}

export interface Connection {
  to: Vertex;
  distance: number;
}

export class Vertex {
  constructor(public id: string | number, public adjacent: Connection[] = []) {}
}

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

console.log(dijkstra(a, d, [a, b, c, d, e]));
