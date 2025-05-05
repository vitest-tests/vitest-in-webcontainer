import { defineConfig } from "vitest/config";
import { vitestWebcontainers } from "@webcontainer/test/plugin";

export default defineConfig({
  plugins: [vitestWebcontainers()],

  test: {
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
