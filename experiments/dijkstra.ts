/**
 * [Dijkstra's Algorithm Explained](https://www.freecodecamp.org/news/dijkstras-algorithm-explained-with-a-pseudocode-example/)
 */

export function dijkstra(from: Vertex, to: Vertex, graph: Vertex[]): PathResult {
  // initialize list of shortest distances
  const records = new Map<Vertex, Record>();

  for (let v of graph) {
    records.set(v, { distance: Infinity });
  }

  records.set(from, { distance: 0 });

  for (let adj of from.adjacent) {
    records.set(adj.to, {
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
    for (let [v] of unvisited) {
      const distance = records.get(v)!.distance;
      if (distance < tmpDistance) {
        shortest = v;
        tmpDistance = distance;
      }
    }

    for (let connection of shortest.adjacent) {
      if (unvisited.get(connection.to)) {
        const recordShortestDist = records.get(shortest)!.distance;
        const recordAdj = records.get(connection.to) as Record;
        const newDist = connection.distance + recordShortestDist;
        if (newDist < recordAdj.distance) {
          recordAdj.distance = newDist;
          recordAdj.previous = shortest;
        }
      }
    }

    unvisited.delete(shortest);
  }

  // construct the path by traversing the records backwards
  const path: Vertex[] = [to];
  let recordPointer = records.get(to);
  let totalDistance = recordPointer!.distance;
  while (recordPointer!.previous !== from) {
    const previous = recordPointer!.previous as Vertex;
    path.push(previous);
    recordPointer = records.get(previous);
    totalDistance += recordPointer!.distance;
  }
  path.push(from);
  path.reverse();

  return {
    path,
    distance: totalDistance,
  };
}

export interface Connection {
  to: Vertex;
  distance: number;
}

export interface Record {
  distance: number;
  previous?: Vertex;
}

export interface PathResult {
  path: Vertex[];
  distance: number;
}

export class Vertex {
  constructor(public id: string | number, public adjacent: Connection[] = []) {}
}

// const a = new Vertex('a');
// const b = new Vertex('b');
// const c = new Vertex('c');
// const d = new Vertex('d');
// const e = new Vertex('e');

// a.adjacent = [
//   { to: c, distance: 2 },
//   { to: b, distance: 4 },
// ];
// b.adjacent = [
//   { to: a, distance: 4 },
//   { to: c, distance: 1 },
//   { to: d, distance: 3 },
//   { to: e, distance: 2 },
// ];
// c.adjacent = [
//   { to: a, distance: 2 },
//   { to: b, distance: 1 },
// ];
// d.adjacent = [
//   { to: b, distance: 3 },
//   { to: e, distance: 5 },
// ];
// e.adjacent = [
//   { to: b, distance: 2 },
//   { to: d, distance: 5 },
// ];

// console.log(dijkstra(a, d, [a, b, c, d, e]));
