function change(coins: number[], target: number) {
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

  let coinCount = 0;
  for (const numCoins of result.values()) {
    coinCount += numCoins;
  }

  return result;
}

console.log(change([1, 5, 10, 25], 234));
// 9x25c = 225
// 1x5c = 230
// 4x1c = 234
// 14 coins

console.log(change([1, 4, 5], 13));
// 3x4c = 12
// 1x1c = 13
// 4 coins
