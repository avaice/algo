import { describe, expect, it } from "vitest";
import { LRUCache } from "./ans";

describe("LRUCache", () => {
  it("evicts the least recently used key", () => {
    const cache = new LRUCache(2);

    cache.put(1, 10);
    cache.put(2, 20);
    expect(cache.get(1)).toBe(10);

    cache.put(3, 30);

    expect(cache.get(2)).toBeNull();
    expect(cache.get(1)).toBe(10);
    expect(cache.get(3)).toBe(30);
  });

  it("updates an existing key and marks it as recently used", () => {
    const cache = new LRUCache(2);

    cache.put(1, 10);
    cache.put(2, 20);
    cache.put(1, 99);
    cache.put(3, 30);

    expect(cache.get(1)).toBe(99);
    expect(cache.get(2)).toBeNull();
    expect(cache.get(3)).toBe(30);
  });

  it("works with capacity one", () => {
    const cache = new LRUCache(1);

    cache.put(1, 10);
    cache.put(2, 20);

    expect(cache.get(1)).toBeNull();
    expect(cache.get(2)).toBe(20);
  });
});
