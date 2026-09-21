// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Se sirve en https://consultorialocal.es/dev-steban-portfolio/
  base: "/dev-steban-portfolio",
  integrations: [tailwind()],
});
