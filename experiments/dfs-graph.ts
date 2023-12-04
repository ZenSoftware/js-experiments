class Vertex {
  adjacent: Vertex[] = [];
  constructor(public value: number) {}
}

const v0 = new Vertex(0);
const v1 = new Vertex(1);
const v2 = new Vertex(2);
const v3 = new Vertex(3);
const v4 = new Vertex(4);
v0.adjacent.push(v1);
v0.adjacent.push(v2);
v1.adjacent.push(v0);
v1.adjacent.push(v3);
v2.adjacent.push(v0);
v2.adjacent.push(v3);
v3.adjacent.push(v4);

function dfs(root: Vertex) {
  const result: number[] = [];
  const visited = new Map<Vertex, boolean>();

  function search(vec: Vertex) {
    visited.set(vec, true);
    result.push(vec.value);
    for (const v of vec.adjacent) {
      if (!visited.get(v)) search(v);
    }
  }

  search(root);
  return result;
}

console.log(dfs(v0));
export { v0, dfs };
