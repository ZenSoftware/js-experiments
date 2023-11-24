class Vertex {
  left: Vertex | undefined;
  right: Vertex | undefined;
  constructor(public value: any) {}
}

/**
 *       a
 *      / \
 *     b   c
 *    / \   \
 *   d   e   f
 */

const a = new Vertex('a');
const b = new Vertex('b');
const c = new Vertex('c');
const d = new Vertex('d');
const e = new Vertex('e');
const f = new Vertex('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function bfs(vertex: Vertex) {
  const answer: string[] = [];
  const queue: Vertex[] = [];
  queue.push(vertex);

  while (queue.length) {
    const current = queue.shift() as Vertex;
    answer.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return answer;
}

console.log('bfs', bfs(a));
// a b c d e f

function dfsPreorder(vertex: Vertex | undefined) {
  let answer: string[] = [];

  function dfs(vertex: Vertex | undefined) {
    if (!vertex) return;

    answer.push(vertex.value);
    dfs(vertex.left);
    dfs(vertex.right);
  }

  dfs(vertex);
  return answer;
}

console.log('dfsPreorder', dfsPreorder(a));
// a b d e c f

function dfsInorder(vertex: Vertex | undefined) {
  const answer: string[] = [];

  function dfs(vertex: Vertex | undefined) {
    if (!vertex) return;

    dfs(vertex.left);
    answer.push(vertex.value);
    dfs(vertex.right);
  }

  dfs(vertex);
  return answer;
}

console.log('dfsInorder', dfsInorder(a));
// d b e a c f

function dfsPostorder(vertex: Vertex | undefined) {
  const answer: string[] = [];

  function dfs(vertex: Vertex | undefined) {
    if (!vertex) return;

    dfs(vertex.left);
    dfs(vertex.right);
    answer.push(vertex.value);
  }

  dfs(vertex);
  return answer;
}

console.log('dfsPostorder', dfsPostorder(a));
// d e b f c a
