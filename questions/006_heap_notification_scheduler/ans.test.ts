import { describe, expect, it } from "vitest";
import { NotificationScheduler } from "./ans";

describe("NotificationScheduler", () => {
  it("pops notifications by earliest executeAt", () => {
    const scheduler = new NotificationScheduler();

    scheduler.schedule("a", 300, "A");
    scheduler.schedule("b", 100, "B");
    scheduler.schedule("c", 200, "C");

    expect(scheduler.popNext(150)).toEqual({
      notificationId: "b",
      message: "B",
    });
    expect(scheduler.popNext(150)).toBeNull();
    expect(scheduler.popNext(500)).toEqual({
      notificationId: "c",
      message: "C",
    });
    expect(scheduler.popNext(500)).toEqual({
      notificationId: "a",
      message: "A",
    });
  });

  it("keeps schedule order when executeAt is equal", () => {
    const scheduler = new NotificationScheduler();

    scheduler.schedule("first", 100, "first");
    scheduler.schedule("second", 100, "second");
    scheduler.schedule("third", 100, "third");

    expect(scheduler.popNext(100)?.notificationId).toBe("first");
    expect(scheduler.popNext(100)?.notificationId).toBe("second");
    expect(scheduler.popNext(100)?.notificationId).toBe("third");
  });

  it("does not remove a future notification", () => {
    const scheduler = new NotificationScheduler();

    scheduler.schedule("future", 200, "later");

    expect(scheduler.popNext(199)).toBeNull();
    expect(scheduler.popNext(200)).toEqual({
      notificationId: "future",
      message: "later",
    });
  });
});
