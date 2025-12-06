import React from 'react'

// Animated matrix/particle background reacting to clicks (purely decorative)
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at top left, rgba(0,255,153,0.02), transparent), radial-gradient(ellipse at bottom right, rgba(0,255,153,0.01), transparent)'
      }}
    />
  )
}