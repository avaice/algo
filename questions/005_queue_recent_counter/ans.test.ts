import { describe, expect, it } from "vitest";
import { RecentCounter } from "./ans";

describe("RecentCounter", () => {
  it("counts requests in the last 60 seconds", () => {
    const counter = new RecentCounter();

    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(30)).toBe(2);
    expect(counter.ping(60)).toBe(3);
    expect(counter.ping(61)).toBe(3);
  });

  it("includes both ends of the window", () => {
    const counter = new RecentCounter();

    expect(counter.ping(100)).toBe(1);
    expect(counter.ping(159)).toBe(2);
    expect(counter.ping(160)).toBe(2);
  });

  it("supports multiple requests at the same timestamp", () => {
    const counter = new RecentCounter();

    expect(counter.ping(10)).toBe(1);
    expect(counter.ping(10)).toBe(2);
    expect(counter.ping(10)).toBe(3);
  });
});
