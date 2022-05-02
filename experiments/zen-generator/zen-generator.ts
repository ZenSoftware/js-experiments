export function* zenG(amount: number) {
  for (let i = 1; i <= amount; i++) {
    yield i;
  }
  yield* [8, 9];
}

export function* getId() {
  let i = 1;
  while (true) {
    let ret: number | undefined = yield i++;
    if (ret !== undefined) i += ret;
  }
}
