// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://bangdd.github.io",
  base: "portfolio-astro",
  redirects: {
    '/': '/portfolio-astro',
  }
});
