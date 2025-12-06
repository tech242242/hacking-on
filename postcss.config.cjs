// postcss.config.cjs
// Robust PostCSS config: tries @tailwindcss/postcss first, falls back to tailwindcss.
// If neither is installed, this will surface a clear error during install/build.
//
// SIMULATION ONLY - NO REAL TRACKING
const { createRequire } = require('module')
const requireFromCwd = createRequire(process.cwd() + '/')
let tailwindPlugin = null

function resolvePlugin(name) {
  try {
    const mod = requireFromCwd(name)
    // support ESM default export wrapped modules
    return mod && mod.default ? mod.default : mod
  } catch (err) {
    return null
  }
}

// Try the newer package first
tailwindPlugin = resolvePlugin('@tailwindcss/postcss') || resolvePlugin('tailwindcss')

if (!tailwindPlugin) {
  throw new Error(
    'PostCSS: missing Tailwind PostCSS plugin. Install either @tailwindcss/postcss or tailwindcss as a dependency.'
  )
}

const autoprefixer = resolvePlugin('autoprefixer')
if (!autoprefixer) {
  throw new Error('PostCSS: missing autoprefixer. Install autoprefixer as a dependency.')
}

module.exports = {
  plugins: [
    // Call plugin factory if it is a function (most plugins export a function)
    typeof tailwindPlugin === 'function' ? tailwindPlugin() : tailwindPlugin,
    typeof autoprefixer === 'function' ? autoprefixer() : autoprefixer
  ]
}
