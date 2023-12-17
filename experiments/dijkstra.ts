/**
 * [Dijkstra's Algorithm Explained](https://www.freecodecamp.org/news/dijkstras-algorithm-explained-with-a-pseudocode-example/)
 */

export function dijkstra(from: PathNode, to: PathNode, graph: PathNode[]): Path {
  // initialize list of shortest recorded distances
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

  // initialize the unvisited list
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
        const shortestDist = records.get(shortest)!.distance;
        const newShortest = connection.distance + shortestDist;
        const recordAdj = records.get(connection.to) as PathRecord;
        if (newShortest < recordAdj.distance) {
          recordAdj.distance = newShortest;
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
