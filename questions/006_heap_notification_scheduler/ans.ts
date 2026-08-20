export type Notification = {
  notificationId: string;
  message: string;
};

export class NotificationScheduler {
  schedule(notificationId: string, executeAt: number, message: string): void {
    throw new Error("TODO: implement NotificationScheduler.schedule");
  }

  popNext(currentTime: number): Notification | null {
    throw new Error("TODO: implement NotificationScheduler.popNext");
  }
}
