/**
 * [Sample Graph](https://www.freecodecamp.org/news/dijkstras-algorithm-explained-with-a-pseudocode-example/)
 */

export function dijkstra(from: Vertex, to: Vertex, graph: Vertex[]) {
  // initialize list of shortest distances
  const shortestDistances = new Map<Vertex, number>();
  for (let v of graph) {
    shortestDistances.set(v, Infinity);
  }
  shortestDistances.set(from, 0);
  for (let adj of from.adjacent) {
    shortestDistances.set(adj.to, adj.distance);
  }

  // create unvisited list
  const unvisited = new Map<Vertex, undefined>(graph.map(v => [v, undefined]));
  unvisited.delete(from);

  // find the shortest vertex amongst unvisited vertices
  let shortest!: Vertex;
  let tmpDistance = Infinity;
  for (let [v, _] of unvisited) {
    const distance = shortestDistances.get(v) as number;
    if (distance < tmpDistance) {
      shortest = v;
      tmpDistance = distance;
    }
  }

  unvisited.delete(shortest);

  for (let connection of shortest.adjacent) {
    if (unvisited.get(connection.to)) {
      // shortestDistances
    }
  }
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
