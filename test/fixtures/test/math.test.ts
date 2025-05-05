import { expect, test } from "vitest";

import { sum, subtract } from "../src/math";

test("sum", () => {
  expect(sum(2, 5)).toBe(7);
});

test("subtract", () => {
  expect(subtract(5, 2)).toBe(3);
});
