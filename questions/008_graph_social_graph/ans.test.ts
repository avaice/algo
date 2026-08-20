import { describe, expect, it } from "vitest";
import { SocialGraph } from "./ans";

describe("SocialGraph", () => {
  it("finds reachability through a cycle", () => {
    const graph = new SocialGraph();

    graph.addFriend("alice", "bob");
    graph.addFriend("bob", "charlie");
    graph.addFriend("charlie", "alice");
    graph.addFriend("charlie", "dave");

    expect(graph.canReach("alice", "dave")).toBe(true);
    expect(graph.canReach("dave", "alice")).toBe(true);
  });

  it("returns false for unreachable users", () => {
    const graph = new SocialGraph();

    graph.addFriend("alice", "bob");
    graph.addFriend("charlie", "dave");

    expect(graph.canReach("alice", "dave")).toBe(false);
  });

  it("returns shortest hop count", () => {
    const graph = new SocialGraph();

    graph.addFriend("alice", "bob");
    graph.addFriend("bob", "charlie");
    graph.addFriend("alice", "ken");
    graph.addFriend("ken", "dave");
    graph.addFriend("dave", "charlie");

    expect(graph.getDistance("alice", "charlie")).toBe(2);
    expect(graph.getDistance("alice", "alice")).toBe(0);
  });

  it("returns null when no path exists", () => {
    const graph = new SocialGraph();

    graph.addFriend("alice", "bob");

    expect(graph.getDistance("alice", "unknown")).toBeNull();
  });

  it("ignores duplicate friendships", () => {
    const graph = new SocialGraph();

    graph.addFriend("alice", "bob");
    graph.addFriend("alice", "bob");

    expect(graph.getDistance("alice", "bob")).toBe(1);
  });
});
