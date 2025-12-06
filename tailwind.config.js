module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00ff99',
          dark: '#00cc7a'
        },
        background: '#050509',
        terminal: '#06130b'
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        'neon-glow': '0 0 18px rgba(0,255,153,0.12), 0 0 40px rgba(0,255,153,0.06)'
      }
    }
  },
  plugins: []
}