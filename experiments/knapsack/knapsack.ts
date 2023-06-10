/**
 * https://www.youtube.com/watch?v=cJ21moQpofY
 * We are given an empty knapsack with a max capacity.  We are also given an array of items
 * that can be placed into the knapsack.  Each item that can be placed into the knapsack has a
 * weight, and a value.  The goal is to maximizing the value that can be added to the knapsack,
 * while keeping the total sum of weight less than or equal to the capacity.
 */

class Item {
  weight: number;
  value: number;
}

function knapsack(items: Item[], capacity: number): number {
  const table: number[][] = Array(items.length + 1)
    .fill(null)
    .map(() => []);

  // fill the first row with 0s
  for (let col = 0; col <= capacity; col++) {
    table[0][col] = 0;
  }

  for (let i = 1; i <= items.length; i++) {
    for (let c = 0; c <= capacity; c++) {
      const item = items[i - 1];

      if (c - item.weight < 0) {
        table[i][c] = table[i - 1][c];
      } else {
        const excluded = table[i - 1][c];
        const included = item.value + table[i - 1][c - item.weight];
        table[i][c] = Math.max(excluded, included);
      }
    }
  }

  console.log(table);
  return table[items.length][capacity];
}

const sample: Item[] = [
  { value: 2, weight: 3 },
  { value: 2, weight: 1 },
  { value: 4, weight: 3 },
  { value: 5, weight: 4 },
  { value: 3, weight: 2 },
];
console.log(knapsack(sample, 7));
