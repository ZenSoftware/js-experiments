export function* zenG(amount: number) {
  for (let i = 1; i <= amount; i++) {
    yield i;
  }
}
