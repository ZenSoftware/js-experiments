function coinsNumWays(coins: number[], target: number) {
  const cache: Record<string, number> = {};

  function numWays(m: number) {
    if (cache[m] !== undefined) return cache[m];
    if (m === 0) return 1;

    let result = 0;

    for (let coin of coins) {
      const subproblem = m - coin;
      if (subproblem >= 0) {
        result += numWays(subproblem);
      }
    }

    cache[m] = result;
    return result;
  }

  return numWays(target);
}

console.log(coinsNumWays([1, 4, 5], 34));
