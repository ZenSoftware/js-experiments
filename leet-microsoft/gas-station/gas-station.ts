/**
 * https://leetcode.com/problems/gas-station/?envType=featured-list&envId=top-microsoft-questions?envType=featured-list&envId=top-microsoft-questions
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
 * Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
 * n == gas.length == cost.length
 * 1 <= n <= 105
 * 0 <= gas[i], cost[i] <= 104
 */
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] >= cost[i]) {
      let pointer = i + 1;
      let tank = gas[i] - cost[i];
      while (pointer !== i) {
        if (pointer >= gas.length) {
          if (i === 0) return 0;
          pointer = 0;
        }
        tank += gas[pointer] - cost[pointer];
        if (tank < 0) break;
        pointer++;
      }
      if (pointer === i) return i;
    }
  }

  return -1;
}
