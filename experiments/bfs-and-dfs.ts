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

/**
 *
 * @param root The root of the tree
 * @param fn The function to operate over a vertex upon visiting
 * @param order The order of the depth first search
 * @returns void
 */
export function dfs<T>(
  root: Vertex<T> | undefined,
  fn: (v: Vertex<T>) => void,
  order: 'preorder' | 'inorder' | 'postorder' = 'preorder'
) {
  if (!root) return;

  function depthFirstSearch(v: Vertex<T>) {
    if (order === 'preorder') fn(v);
    if (v.left) depthFirstSearch(v.left);
    if (order === 'inorder') fn(v);
    if (v.right) depthFirstSearch(v.right);
    if (order === 'postorder') fn(v);
  }
  depthFirstSearch(root);
}

console.log('bfs', bfs(a));
// a b c d e f

let result: string[] = [];
dfs(a, v => result.push(v.value), 'preorder');
console.log('dfs preorder', result);
// a b d e c f

result = [];
dfs(a, v => result.push(v.value), 'inorder');
console.log('dfs inorder', result);
// d b e a c f

result = [];
dfs(a, v => result.push(v.value), 'postorder');
console.log('dfs postorder', result);
// d e b f c a
