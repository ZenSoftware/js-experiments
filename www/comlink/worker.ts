declare var Comlink: any;
importScripts('comlink.js');

const api = {
  fib(n: number, memo = {}) {
    if (n in memo) return memo[n];

    if (n <= 2) return 1;

    memo[n] = this.fib(n - 1, memo) + this.fib(n - 2, memo);
    return memo[n];
  },
};

Comlink.expose(api);
