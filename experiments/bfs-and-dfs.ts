class Vertex<T> {
  constructor(public value: T, public left?: Vertex<T>, public right?: Vertex<T>) {}
}

/**
 *      a
 *     / \
 *    b   c
 *   / \   \
 *  d   e   f
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

export function bfs<T>(root: Vertex<T> | undefined) {
  if (!root) return [];

  const result: T[] = [];
  const queue: Vertex<T>[] = [root];

  while (queue.length) {
    const current = queue.shift() as Vertex<T>;
    result.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
}

export function dfs<T>(
  root: Vertex<T> | undefined,
  order: 'preorder' | 'inorder' | 'postorder' = 'preorder'
) {
  if (!root) return [];
  const result: T[] = [];
  function depthFirstSearch(v: Vertex<T>) {
    if (order === 'preorder') result.push(v.value);
    if (v.left) depthFirstSearch(v.left);
    if (order === 'inorder') result.push(v.value);
    if (v.right) depthFirstSearch(v.right);
    if (order === 'postorder') result.push(v.value);
  }
  depthFirstSearch(root);
  return result;
}

console.log(bfs(a));
// a b c d e f

console.log(dfs(a, 'preorder'));
// a b d e c f

console.log(dfs(a, 'inorder'));
// d b e a c f

console.log(dfs(a, 'postorder'));
// d e b f c a
