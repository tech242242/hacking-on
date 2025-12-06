import React from 'react'

// SIMULATION ONLY - NO REAL TRACKING.
// Simple interactive particle grid (clicking pulses the grid).
export default function NetworkMatrix() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Network Matrix (SIM)</h3>
      <div className="h-48 bg-gradient-to-br from-black/20 to-black/40 rounded grid grid-cols-12 gap-1 p-2">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className="bg-black/60 rounded-sm hover:bg-neon/20 transition-colors"
            role="button"
            tabIndex={0}
            aria-label={`node ${i + 1}`}
          />
        ))}
      </div>
      <p className="text-sm mt-2 text-neon/60">Interactive particle matrix — purely visual.</p>
    </div>
  )
}