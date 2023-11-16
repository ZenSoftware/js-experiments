class Vertex {
  left?: Vertex;
  right?: Vertex;
  constructor(public value?: any) {}
}

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

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

/**
 * BREADTH FIRST TRAVERSAL
 */
function bfs() {
  const queue: Vertex[] = [];
  queue.push(a);

  while (queue.length) {
    const current = queue.shift() as Vertex;
    console.log(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

bfs(); // abcdef

// ==================================================
/**
 * DEPTH FIRST TRAVERSAL
 * preorder:  <current><left><right>
 * inorder:   <left><current><right>
 * postorder: <left><right><current>
 */

function dfsPreIterative() {
  const stack: Vertex[] = [];
  stack.push(a);

  while (stack.length) {
    const current = stack.pop() as Vertex;
    console.log(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
}

dfsPreIterative(); // abdecf

// ==================================================

function dfsPre(root: Vertex | undefined) {
  if (root == undefined) return;
  console.log(root.value);
  dfsPre(root.left);
  dfsPre(root.right);
}

dfsPre(a); // abdecf

// ==================================================

function dfsInorder(root: Vertex | undefined) {
  if (root == undefined) return;
  dfsInorder(root.left);
  console.log(root.value);
  dfsInorder(root.right);
}

dfsInorder(a); // dbeafc

// ==================================================

function dfsPost(root: Vertex | undefined) {
  if (root == undefined) return;
  dfsPost(root.left);
  dfsPost(root.right);
  console.log(root.value);
}

dfsPost(a); // debfca
