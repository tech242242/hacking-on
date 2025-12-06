// postcss.config.cjs
// Robust PostCSS config: prefer @tailwindcss/postcss if available, otherwise fall back to tailwindcss.
// This avoids requiring a non-existent @tailwindcss/postcss version in package.json.
// SIMULATION ONLY - NO REAL TRACKING
const { createRequire } = require('module')
const requireFromCwd = createRequire(process.cwd() + '/')

function tryResolve(name) {
  try {
    const m = requireFromCwd(name)
    return m && m.default ? m.default : m
  } catch (e) {
    return null
  }
}

const tailwindPlugin = tryResolve('@tailwindcss/postcss') || tryResolve('tailwindcss')
if (!tailwindPlugin) {
  throw new Error(
    'PostCSS: missing Tailwind plugin. Install tailwindcss and autoprefixer as devDependencies.'
  )
}

const autoprefixer = tryResolve('autoprefixer')
if (!autoprefixer) {
  throw new Error('PostCSS: missing autoprefixer. Install autoprefixer as a devDependency.')
}

module.exports = {
  plugins: [
    typeof tailwindPlugin === 'function' ? tailwindPlugin() : tailwindPlugin,
    typeof autoprefixer === 'function' ? autoprefixer() : autoprefixer
  ]
}
