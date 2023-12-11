/**
 * [Dijkstra's Algorithm Explained](https://www.freecodecamp.org/news/dijkstras-algorithm-explained-with-a-pseudocode-example/)
 */

export function dijkstra(from: PathNode, to: PathNode, graph: PathNode[]): Path {
  // initialize list of shortest distances
  const records = new Map<PathNode, PathRecord>();
  records.set(from, { distance: 0 });
  for (let n of graph) {
    records.set(n, { distance: Infinity });
  }
  for (let adj of from.adjacent) {
    records.set(adj.to, {
      distance: adj.distance,
      previous: from,
    });
  }

  // create unvisited list
  const unvisited = new Map<PathNode, true>(graph.map(n => [n, true]));

  while (unvisited.size > 0) {
    // select the node with the shortest recorded distance amongst unvisited
    let shortest!: PathNode;
    let tmpDistance = Infinity;
    for (let [n] of unvisited) {
      const distance = records.get(n)!.distance;
      if (distance < tmpDistance) {
        shortest = n;
        tmpDistance = distance;
      }
    }

    // Update the records according to the shortest thus far
    for (let connection of shortest.adjacent) {
      if (unvisited.get(connection.to)) {
        const recordShortestDist = records.get(shortest)!.distance;
        const recordAdj = records.get(connection.to) as PathRecord;
        const newDist = connection.distance + recordShortestDist;
        if (newDist < recordAdj.distance) {
          recordAdj.distance = newDist;
          recordAdj.previous = shortest;
        }
      }
    }

    unvisited.delete(shortest);
  }

  // construct the path by traversing the records
  // backwardsand and sum the total distance
  const path: PathNode[] = [to];
  let recordPointer = records.get(to);
  let totalDistance = recordPointer!.distance;
  while (recordPointer!.previous !== from) {
    const previous = recordPointer!.previous as PathNode;
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

export interface PathConnection {
  to: PathNode;
  distance: number;
}

export interface PathRecord {
  distance: number;
  previous?: PathNode;
}

export interface Path {
  path: PathNode[];
  distance: number;
}

export class PathNode {
  constructor(public id: string | number, public adjacent: PathConnection[] = []) {}
}

// const a = new PathNode('a');
// const b = new PathNode('b');
// const c = new PathNode('c');
// const d = new PathNode('d');
// const e = new PathNode('e');

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
