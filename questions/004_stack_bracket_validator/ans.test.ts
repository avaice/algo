import { describe, expect, it } from "vitest";
import { isBalancedBrackets } from "./ans";

describe("isBalancedBrackets", () => {
  it("accepts properly nested brackets", () => {
    expect(isBalancedBrackets("function test() { return [1, 2]; }")).toBe(true);
    expect(isBalancedBrackets("([]{})")).toBe(true);
  });

  it("rejects mismatched order", () => {
    expect(isBalancedBrackets("([)]")).toBe(false);
    expect(isBalancedBrackets("{]")).toBe(false);
  });

  it("rejects missing opening or closing brackets", () => {
    expect(isBalancedBrackets("((" )).toBe(false);
    expect(isBalancedBrackets(")" )).toBe(false);
  });

  it("ignores non-bracket characters", () => {
    expect(isBalancedBrackets("abc123")).toBe(true);
  });
});
