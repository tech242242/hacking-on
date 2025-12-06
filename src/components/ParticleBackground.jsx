import React, { useEffect, useState } from 'react'

// Bonus UI: particle/point grid that reacts to clicks.
// SIMULATION ONLY - purely decorative.

export default function ParticleBackground() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // initialize a subtle particle grid
    const arr = []
    for (let i = 0; i < 30; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 3,
        glow: Math.random() * 0.6
      })
    }
    setParticles(arr)
  }, [])

  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    // create ripple particles
    const ripple = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      left: x + (Math.random() * 6 - 3),
      top: y + (Math.random() * 6 - 3),
      size: 2 + Math.random() * 4,
      glow: 0.7
    }))
    setParticles(p => [...p, ...ripple].slice(-80))
  }

  return (
    <div
      onClick={handleClick}
      className="pointer-events-auto fixed inset-0 -z-10"
      aria-hidden="true"
    >
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 ${4 + p.glow * 12}px rgba(0,255,127,0.08)`,
            transform: `translate(-50%,-50%)`
          }}
          className="absolute bg-neon-green rounded-full opacity-80 transition-all duration-700"
        />
      ))}
    </div>
  )
}