declare var Comlink: any;
importScripts('comlink.js');

const api = {
  fib(n: number) {
    if (n === 1 || n === 2) return 1;
    return this.fib(n - 1) + this.fib(n - 2);
  },
};

Comlink.expose(api);
