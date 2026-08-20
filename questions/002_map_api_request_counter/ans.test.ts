import { describe, expect, it } from "vitest";
import { countRequests } from "./ans";

describe("countRequests", () => {
  it("counts requests per user and endpoint", () => {
    expect(
      countRequests([
        { userId: "alice", endpoint: "/users" },
        { userId: "bob", endpoint: "/users" },
        { userId: "alice", endpoint: "/users" },
        { userId: "alice", endpoint: "/posts" },
      ]),
    ).toEqual(
      new Map([
        [
          "alice",
          new Map([
            ["/users", 2],
            ["/posts", 1],
          ]),
        ],
        ["bob", new Map([["/users", 1]])],
      ]),
    );
  });

  it("returns an empty map for no logs", () => {
    expect(countRequests([])).toEqual(new Map());
  });

  it("keeps endpoints independent", () => {
    expect(
      countRequests([
        { userId: "alice", endpoint: "/a" },
        { userId: "alice", endpoint: "/b" },
        { userId: "alice", endpoint: "/a" },
      ]).get("alice"),
    ).toEqual(
      new Map([
        ["/a", 2],
        ["/b", 1],
      ]),
    );
  });
});
