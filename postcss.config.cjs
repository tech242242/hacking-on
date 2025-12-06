// postcss.config.cjs
// Use the official Tailwind PostCSS plugin entry.
// SIMULATION ONLY - NO REAL TRACKING
module.exports = {
  plugins: {
    // The Tailwind team moved PostCSS integration to @tailwindcss/postcss.
    // Ensure @tailwindcss/postcss is installed in your devDependencies.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
