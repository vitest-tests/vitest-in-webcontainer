import { test } from "@webcontainer/test";
import { expect } from "vitest";
import stripAnsi from "strip-ansi";

test("run tests", async ({ webcontainer }) => {
  await webcontainer.mount("test/fixtures");
  await webcontainer.runCommand("npm", ["install"]);

  const coloredOutput = await webcontainer.runCommand("npm", ["test"]);
  const output = stripAnsi(coloredOutput);

  expect(output).toContain("✓ test/math.test.ts");
  expect(output).toContain("✓ sum");
  expect(output).toContain("✓ subtract");

  expect(output).toContain("Test Files  1 passed (1)");
  expect(output).toContain("Tests  2 passed (2)");
});
