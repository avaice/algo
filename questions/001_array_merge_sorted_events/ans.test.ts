import { describe, expect, it } from "vitest";
import { mergeSortedEvents } from "./ans";

describe("mergeSortedEvents", () => {
  it("merges two sorted arrays", () => {
    expect(
      mergeSortedEvents(
        [
          { id: "a", timestamp: 100 },
          { id: "c", timestamp: 300 },
        ],
        [
          { id: "b", timestamp: 200 },
          { id: "d", timestamp: 400 },
        ],
      ),
    ).toEqual([
      { id: "a", timestamp: 100 },
      { id: "b", timestamp: 200 },
      { id: "c", timestamp: 300 },
      { id: "d", timestamp: 400 },
    ]);
  });

  it("prefers left events when timestamps are equal", () => {
    expect(
      mergeSortedEvents(
        [
          { id: "left-1", timestamp: 100 },
          { id: "left-2", timestamp: 200 },
        ],
        [
          { id: "right-1", timestamp: 100 },
          { id: "right-2", timestamp: 200 },
        ],
      ),
    ).toEqual([
      { id: "left-1", timestamp: 100 },
      { id: "right-1", timestamp: 100 },
      { id: "left-2", timestamp: 200 },
      { id: "right-2", timestamp: 200 },
    ]);
  });

  it("handles an empty array", () => {
    expect(mergeSortedEvents([], [{ id: "a", timestamp: 1 }])).toEqual([
      { id: "a", timestamp: 1 },
    ]);
    expect(mergeSortedEvents([], [])).toEqual([]);
  });
});
