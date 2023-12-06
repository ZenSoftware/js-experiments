function greedyChange(coins: number[], target: number) {
  coins.sort((a, b) => b - a);
  let remaining = target;
  const result = new Map<number, number>();

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    const numCoins = Math.floor(remaining / coin);
    if (numCoins > 0) {
      remaining -= numCoins * coin;
      result.set(coin, numCoins);
    }
  }

  const coinCount = Array.from(result.values()).reduce((accum, curr) => accum + curr, 0);
  return result;
}

function dynamicChange(coins: number[], target: number) {
  const cache: Record<string, number | null> = {};

  function minIgnoreNull(a: number | null, b: number): number {
    if (a === null) return b;
    if (b === null) return a;
    return Math.min(a, b);
  }

  function minimumCoins(m: number) {
    if (cache[m] !== undefined) return cache[m];
    if (m <= 0) return 0;

    let result: number | null = null;

    for (let coin of coins) {
      const remaining = m - coin;
      if (remaining < 0) continue;
      else {
        const subResult = minimumCoins(remaining);
        if (subResult !== null) {
          result = minIgnoreNull(result, subResult + 1);
        }
      }
    }

    cache[m] = result;
    return result;
  }

  return minimumCoins(target);
}

console.log(greedyChange([1, 5, 10, 25], 234));
console.log(dynamicChange([1, 5, 10, 25], 234));
// 9x25c = 225
// 1x5c = 230
// 4x1c = 234
// 14 coins

console.log(greedyChange([1, 4, 5], 13));
// 1x5c = 12
// 2x4c = 13
// 3 coins
