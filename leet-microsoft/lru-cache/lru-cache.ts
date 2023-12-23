/**
 * https://leetcode.com/problems/lru-cache/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 * Implement the LRUCache class:
 * LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * int get(int key) Return the value of the key if the key exists, otherwise return -1.
 * void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
 * The functions get and put must each run in O(1) average time complexity.
 * 1 <= capacity <= 3000
 * 0 <= key <= 104
 * 0 <= value <= 105
 * At most 2 * 105 calls will be made to get and put.
 */

export class LRUCache {
  map = new Map<number, CacheItem>();
  rank = 0;

  constructor(private capacity: number) {}

  get(key: number): number {
    return this.map.get(key)?.value ?? -1;
  }

  put(key: number, value: number): void {
    const cacheItem: CacheItem = {
      rank: this.rank,
      value,
    };

    if (this.map.size >= this.capacity) {
      let leastKey: number;
      let leastRank = Infinity;

      for (const [key, value] of this.map) {
        if (value.rank < leastRank) {
          leastKey = key;
        }
        this.map.delete(key);
      }
    }

    this.map.set(key, cacheItem);

    this.rank++;
  }
}

interface CacheItem {
  rank: number;
  value: number;
}
