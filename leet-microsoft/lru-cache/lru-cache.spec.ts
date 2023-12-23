import { LRUCache } from './lru-cache';

describe('LRU Cache', () => {
  it('evaluates correctly 1', () => {
    const lRUCache = new LRUCache(2);
    lRUCache.put(1, 1); // cache is {1=1}
    lRUCache.put(2, 2); // cache is {1=1, 2=2}
    expect(lRUCache.get(1)).toEqual(1);
    lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    expect(lRUCache.get(2)).toEqual(-1);
    lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    expect(lRUCache.get(1)).toEqual(-1);
    expect(lRUCache.get(3)).toEqual(3);
    expect(lRUCache.get(4)).toEqual(4);
  });

  it('evaluates correctly 2', () => {
    const lRUCache = new LRUCache(2);
    lRUCache.put(2, 1); // cache is {2=1}
    lRUCache.put(1, 1); // cache is {2=1, 1=1}
    expect(lRUCache.get(2)).toEqual(1);
    lRUCache.put(4, 1); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    expect(lRUCache.get(1)).toEqual(-1);
    expect(lRUCache.get(2)).toEqual(1);
  });

  it('evaluates correctly 3', () => {
    const lRUCache = new LRUCache(2);
    lRUCache.put(1, 1);
    lRUCache.put(2, 2);
    expect(lRUCache.get(1)).toEqual(1);
    lRUCache.put(3, 3);
    expect(lRUCache.get(2)).toEqual(-1);
    lRUCache.put(4, 4);
    expect(lRUCache.get(1)).toEqual(-1);
    expect(lRUCache.get(3)).toEqual(3);
    expect(lRUCache.get(4)).toEqual(4);
  });

  it('evaluates correctly 4', () => {
    const lRUCache = new LRUCache(2);
    expect(lRUCache.get(2)).toEqual(-1);
    lRUCache.put(2, 6);
    expect(lRUCache.get(1)).toEqual(-1);
    lRUCache.put(1, 5);
    lRUCache.put(1, 2);
    expect(lRUCache.get(1)).toEqual(2);
    expect(lRUCache.get(2)).toEqual(6);
  });
});
