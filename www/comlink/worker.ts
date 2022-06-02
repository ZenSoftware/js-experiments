declare var Comlink: any;
importScripts('comlink.js');

const api = {
  // https://betterprogramming.pub/learn-dynamic-programming-the-coin-change-problem-22a104478f50
  coinChangeTopDown(coins: number[], amount: number) {
    const memo: number[] = [];

    const coinChangeSub = remaining => {
      if (remaining === 0) return 0;
      if (remaining < 0) return -1;

      if (memo[remaining - 1]) return memo[remaining - 1];

      let optimalSolution = Infinity;
      for (let c of coins) {
        const optimalForThisCoin = coinChangeSub(remaining - c);
        if (optimalForThisCoin >= 0 && optimalForThisCoin < optimalSolution) {
          optimalSolution = optimalForThisCoin + 1;
        }
      }

      memo[remaining - 1] = optimalSolution;
      return optimalSolution;
    };

    const result = coinChangeSub(amount);
    console.log('solution:', result);
    return result;
  },

  coinChangeBottomUp(coins: number[], amount: number) {
    // Initialize memo
    const memo: number[][] = [];
    for (let row = 0; row <= coins.length; row++) {
      memo[row] = [];
      for (let col = 0; col <= amount; col++) {
        if (col === 0) memo[row][col] = 0;
        else memo[row][col] = Infinity;
      }
    }

    // Compute each cell of memo
    for (let row = 1; row <= coins.length; row++) {
      for (let col = 1; col <= amount; col++) {
        if (col - coins[row - 1] >= 0) {
          const notIncludingCoin = memo[row - 1][col];
          const includingCoin = memo[row][col - coins[row - 1]];
          memo[row][col] = Math.min(notIncludingCoin, 1 + includingCoin);
        } else {
          memo[row][col] = memo[row - 1][col];
        }
      }
    }

    console.log('coins:', coins);
    console.log('memo:', memo);
    console.log('solution:', memo[coins.length][amount]);
    return memo[coins.length][amount];
  },

  // fib(n: number, memo = {}) {
  //   if (n in memo) return memo[n];

  //   if (n <= 2) return 1;

  //   memo[n] = this.fib(n - 1, memo) + this.fib(n - 2, memo);
  //   return memo[n];
  // },
};

Comlink.expose(api);
