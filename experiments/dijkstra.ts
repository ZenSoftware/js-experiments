/**
 * [Dijkstra's Algorithm Explained](https://www.freecodecamp.org/news/dijkstras-algorithm-explained-with-a-pseudocode-example/)
 */

export function dijkstra(from: Vertex, to: Vertex, graph: Vertex[]) {
  // initialize list of shortest distances
  const record = new Map<Vertex, Record>();
  for (let v of graph) {
    record.set(v, { distance: Infinity });
  }
  record.set(from, { distance: 0 });
  for (let adj of from.adjacent) {
    record.set(adj.to, {
      distance: adj.distance,
      previous: from,
    });
  }

  // create unvisited list
  const unvisited = new Map<Vertex, true>(graph.map(v => [v, true]));

  while (unvisited.size > 0) {
    // select the vertex with the shortest recorded distance amongst unvisited
    let shortest!: Vertex;
    let tmpDistance = Infinity;
    for (let [v, _] of unvisited) {
      const distance = record.get(v)!.distance;
      if (distance < tmpDistance) {
        shortest = v;
        tmpDistance = distance;
      }
    }

    for (let connection of shortest.adjacent) {
      if (unvisited.get(connection.to)) {
        const recordShortestDist = record.get(shortest)!.distance;
        const recordAdj = record.get(connection.to) as Record;
        const newDist = connection.distance + recordShortestDist;
        if (newDist < recordAdj.distance) {
          recordAdj.distance = newDist;
          recordAdj.previous = shortest;
        }
      }
    }

    unvisited.delete(shortest);
  }

  // construct the path by traversing the record backwards
  const result: Vertex[] = [to];
  let next = record.get(to);
  while (next!.previous !== from) {
    const previous = next!.previous as Vertex;
    result.unshift(previous);
    next = record.get(previous);
  }
  result.unshift(from);

  return result.map(v => v);
}

export interface Connection {
  to: Vertex;
  distance: number;
}

export interface Record {
  distance: number;
  previous?: Vertex;
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
