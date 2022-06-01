declare var Comlink: any;
importScripts('comlink.js');

const api = {
  memo: {},

  fib(n: number) {
    if (this.memo[n]) return this.memo[n];

    if (n === 0) return 0;
    else if (n === 1) return 1;

    const result = this.fib(n - 1) + this.fib(n - 2);
    this.memo[n] = result;
    return result;
  },
};

Comlink.expose(api);
