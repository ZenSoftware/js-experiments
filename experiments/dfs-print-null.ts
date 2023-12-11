export class Vertex<T> {
  constructor(
    public value: T,
    public left: Vertex<T> | null = null,
    public right: Vertex<T> | null = null
  ) {}
}

const v1 = new Vertex(1);
const v2 = new Vertex(2);
const v3 = new Vertex(3);

let result: (number | null)[] = [];

// v1.right = v3;
// v3.left = v2;
v1.right = v2;
v2.right = v3;
function dfs(v: Vertex<number> | null) {
  if (v !== null) dfs(v.left);

  if (v === null) result.push(null);
  else result.push(v.value);

  if (v !== null) dfs(v.right);
}

dfs(v1);
console.log(result);
