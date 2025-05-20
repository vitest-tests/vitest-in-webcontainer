import { defineConfig } from "vitest/config";
import { vitestWebContainers } from "@webcontainer/test/plugin";

export default defineConfig({
  plugins: [vitestWebContainers()],

  test: {
    include: ["test/*.test.ts"],
    exclude: ["test/fixtures"],
    testTimeout: 60_000,

    browser: {
      enabled: true,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
      headless: true,
    },
  },
});
