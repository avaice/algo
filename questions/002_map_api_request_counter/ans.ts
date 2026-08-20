export type RequestLog = {
  userId: string;
  endpoint: string;
};

export function countRequests(
  logs: RequestLog[],
): Map<string, Map<string, number>> {
  throw new Error("TODO: implement countRequests");
}
