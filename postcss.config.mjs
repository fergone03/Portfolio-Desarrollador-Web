// Tailwind 3 por PostCSS (Vite lo aplica solo). Sustituye a @astrojs/tailwind,
// que no es compatible con Astro 6+.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
