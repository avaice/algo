import { describe, expect, it } from "vitest";
import { findCommonUserIds } from "./ans";

describe("findCommonUserIds", () => {
  it("returns unique common ids in left-side order", () => {
    expect(
      findCommonUserIds(
        ["alice", "bob", "alice", "charlie", "dave"],
        ["dave", "alice", "eve", "charlie"],
      ),
    ).toEqual(["alice", "charlie", "dave"]);
  });

  it("returns no ids when there is no intersection", () => {
    expect(findCommonUserIds(["alice"], ["bob"])).toEqual([]);
  });

  it("deduplicates repeated ids", () => {
    expect(
      findCommonUserIds(
        ["a", "a", "b", "b", "c"],
        ["a", "a", "b", "b"],
      ),
    ).toEqual(["a", "b"]);
  });
});
